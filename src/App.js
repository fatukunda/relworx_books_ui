import React from "react";
import { Router, Route } from "react-router-dom";
import {createBrowserHistory} from "history";
import LoginPage from "./pages/LoginPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import BooksPage from "./pages/BooksPage";

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div className="container-fluid mt-4">
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={UserRegistrationPage} />
        <Route exact path="/books" component={BooksPage} />
      </div>
    </Router>
  );
};

export default App;
