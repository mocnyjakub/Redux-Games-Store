import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/organisms/NavBar/NavBar";
import Aside from "../components/organisms/Aside/Aside";
import Products from "../Views/Products";
import Home from "../Views/Home/Home";
import Modal from "../components/molecules/modal";
import { paths } from "../paths";
import SingleGame from "../Views/SingleGame";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Aside />
      <Modal />
      <Switch>
        <Route exact path={paths.HOME} component={Home} />
        <Route exact path={paths.CONTACT}>
          <h1>Contact</h1>
        </Route>
        <Route exact path={paths.PRODUCTS} component={Products} />
        <Route exact path={paths.SINGLE_GAME} component={SingleGame} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
