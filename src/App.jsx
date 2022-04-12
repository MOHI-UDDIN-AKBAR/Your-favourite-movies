import React from "react";
import AllMovies from "./components/movies/moviePage/MoviePage";
import SignUpPage from "./components/signUp/SignUpPage";
import LogInPage from "./components/logInPage/LogInPage";
const App = () => {
  return (
    <>
      <LogInPage />
      <SignUpPage />
      <AllMovies />
    </>
  );
};
export default App;
