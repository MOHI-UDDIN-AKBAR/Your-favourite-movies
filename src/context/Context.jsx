import React, { useState } from "react";
import { createContext, useContext } from "react";
import { auth } from "../firebase/firebase";
import createUserWithEmailAndPassword from "../firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";

const ContextProvider = createContext();

const Context = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [haveAccount, setHaveAccount] = useState(false);
  const [person, setPerson] = useState({
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
  });
  //send User for Email Verification
  const sendUserEmailVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      // ...
      console.log(auth.currentUser);
    });
  };
  //creating new user
  const createNewUser = async () => {
    if (
      person.username &&
      person.email &&
      person.passwordOne &&
      person.passwordTwo
    ) {
      if (person.passwordOne === person.passwordTwo) {
        await createUserWithEmailAndPassword(
          auth,
          person.email,
          person.passwordOne
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // console.log(user);
            // ...
            setHaveAccount(true);
            if (user) {
              sendUserEmailVerification();
            }
            window.location.assign("/movies");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message);
            // ..
          });
      }
    }
  };

  //login function for existing user
  const loginFunction = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        window.location.assign("/movies");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  //set new password
  const setNewPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        console.log("password sended");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <ContextProvider.Provider
      value={{
        isLoading,
        person,
        setPerson,
        createNewUser,
        haveAccount,
        setHaveAccount,
        loginFunction,
        setNewPassword,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
export const useResultContext = () => useContext(ContextProvider);
export default Context;
