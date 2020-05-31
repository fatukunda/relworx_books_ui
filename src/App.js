import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import axios from "axios";
import LoginPage from "./pages/LoginPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import BooksPage from "./pages/BooksPage";
import Footer from "./components/Footer";
import store from "./store";
import { userLoginSuccess } from "./store/actions/userActions";
export const history = createBrowserHistory();

const App = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("auth_token");
  if (isLoggedIn) {
    store.dispatch(userLoginSuccess({ user }));
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    history.push("/");
  }
  return (
    <Router history={history}>
      <div>
        <Route exact path="/books" component={BooksPage} />
      </div>
      <div className="container-fluid">
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={UserRegistrationPage} />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
