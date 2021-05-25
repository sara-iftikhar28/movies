import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import LoginForm from "./components/loginForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Redirect from="/" exact to="/movies"></Redirect>
        </Switch>
      </main>
      ;
    </React.Fragment>
  );
}

export default App;
