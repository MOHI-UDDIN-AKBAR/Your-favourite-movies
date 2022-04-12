import React, { useEffect, useState } from "react";
import "./styleForSignUp.css";
import { useResultContext } from "../../context/Context";
import { Link } from "react-router-dom";
import MoviePage from "../movies/moviePage/MoviePage";
const SignUpPage = () => {
  const {
    isLoading,
    person,
    setPerson,
    createNewUser,
    haveAccount,
    setHaveAccount,
  } = useResultContext();

  const addPerson = () => {
    if (person) {
      createNewUser(person);
      setPerson({
        username: "",
        email: "",
        passwordOne: "",
        passwordTwo: "",
      });
    }
  };

  return (
    <>
      <div className="signUpPage">
        <div className="form">
          <h1>Create a new account</h1>
          <div className="name">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter you username"
              value={person.username}
              onChange={(e) =>
                setPerson({ ...person, username: e.target.value })
              }
            />
          </div>
          <div className="email">
            <label htmlFor="emailTwo">Email</label>
            <input
              type="email"
              id="emailTwo"
              placeholder="Enter you email"
              value={person.email}
              onChange={(e) => setPerson({ ...person, email: e.target.value })}
            />
          </div>
          <div className="password">
            <label htmlFor="passwordOne">password</label>
            <input
              type="password"
              id="passwordOne"
              placeholder="Enter password"
              value={person.passwordOne}
              onChange={(e) =>
                setPerson({ ...person, passwordOne: e.target.value })
              }
            />
          </div>
          <div className="password">
            <label htmlFor="passwordTwo">Confirm password</label>
            <input
              type="password"
              id="passwordTwo"
              placeholder="Retype your password"
              value={person.passwordTwo}
              onChange={(e) =>
                setPerson({ ...person, passwordTwo: e.target.value })
              }
            />
          </div>

          <button onClick={addPerson}>Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
