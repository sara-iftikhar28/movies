import React from "react";

// import { Route, Switch, Redirect } from "react-router-dom";
// import Movies from "./components/movies";
// import LoginForm from "./components/loginForm";
// import RegisterForm from "./components/registerForm";
// import MovieForm from "./components/movieForm";
import "./App.css";
import Movies from "./components/movies";

function App() {
  return (
    <main className="container">
      <Movies></Movies>
    </main>
  );
  // return (
  //   <React.Fragment>
  //     <main className="container">
  //       <Switch>
  //         <Route path="/login" component={LoginForm}></Route>
  //         <Route path="/register" component={RegisterForm}></Route>
  //         <Route path="/movies/new" component={MovieForm}></Route>
  //         <Route path="/movies/:id" component={MovieForm}></Route>
  //         <Route path="/movies" component={Movies}></Route>
  //         <Redirect from="/" exact to="/movies"></Redirect>
  //       </Switch>
  //     </main>
  //     ;
  //   </React.Fragment>
  // );
}

export default App;
