import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { auth } from "../firebase/firebase";
import createUserWithEmailAndPassword from "../firebase/firebase";
import { sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import data from "../data/data";
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";

const ContextProvider = createContext();
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
  },
};

const Context = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [haveAccount, setHaveAccount] = useState(false);
  const [person, setPerson] = useState({
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
  });
  const [allMovies, setAllMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [randomMovie, setRandomMovies] = useState("");
  const [latestMovies, setLatestMovies] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [isUser, setIsUser] = useState(null);
  const [getPermission, setGetPermission] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

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
            // // Signed in
            const user = userCredential.user;
            // // console.log(user);
            // // ...
            setHaveAccount(true);
            if (user) {
              sendUserEmailVerification();
            }
            // getCurrentUser();

            // window.location.assign("/movies");
          })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
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
        // const user = userCredential.user;
        // console.log(user.email);
        // setCurrentUserEmail(user.email);
        // getCurrentUser();
        // window.location.assign("/movies");
        setGetPermission(true);
        setErrorMessage("");

        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        setErrorMessage("Email or Password is not correct");
        // console.log(error.message);
        setGetPermission(false);
        console.log(error);
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
  //getting latest movies
  const getLatestMovies = (movies) => {
    // console.log(movies[0].year);
    let newMovies = movies.filter(
      (movie) => movie.year == "2014" || movie.year == "2015"
    );
    setLatestMovies(newMovies);
  };
  //fetching movie api
  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://movies-app1.p.rapidapi.com/api/movies",
        options
      );
      const data = await response.json();
      if (data) {
        // console.log(data.results);
        setAllMovies(data.results);
        //getting latest movies
        getLatestMovies(data.results);
        // //getting a random number
        // const randomNumber = Math.floor(
        //   Math.random() * (data.results.length - 0 + 1)
        // );
        // if (randomNumber) {
        //   randomMovie.push(data.results[randomNumber]);
        // }

        if (search) {
          // console.log("hello");
          getMoviesBySearching();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //get movies by searching
  const getMoviesBySearching = () => {
    if (search) {
      // console.log(search);
      const searchText =
        search.charAt(0).toUpperCase() + search.slice(1, search.length);
      const getMovies = allMovies.filter((each) =>
        each.title.includes(searchText)
      );
      if (getMovies.length) {
        setAllMovies(getMovies);
      }
    }
  };

  // get a random movie for banner
  const getBanner = () => {
    const randomNumber = Math.floor(Math.random() * (data.length - 0 + 1));
    setRandomMovies(data[randomNumber]);
    // console.log(data);
  };
  //get current user info
  const getCurrentUser = () => {
    // const user = auth.currentUser;
    // console.log(user);
    // if (user !== null) {
    //   // The user object has basic properties such as display name, email, etc.
    //   const displayName = user.displayName;
    //   const email = user.email;
    //   const photoURL = user.photoURL;
    //   const emailVerified = user.emailVerified;

    //   // The user's ID, unique to the Firebase project. Do NOT use
    //   // this value to authenticate with your backend server, if
    //   const uid = user.uid;
    //   // console.log(displayName, email, photoURL, emailVerified, uid);
    //   setIsUser(user);
    //   setCurrentUserEmail(email);
    // }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setIsUser(user);
        setCurrentUserEmail(user.email);
      } else {
        // User is signed out
        // ...
      }
    });
  };
  // useEffect(() => {
  //   getCurrentUser();
  // }, []);

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
        allMovies,
        fetchApi,
        search,
        setSearch,
        getMoviesBySearching,
        getBanner,
        randomMovie,
        setRandomMovies,
        latestMovies,
        currentUserEmail,
        getCurrentUser,
        isUser,
        getPermission,
        errorMessage,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
export const useResultContext = () => useContext(ContextProvider);
export default Context;
