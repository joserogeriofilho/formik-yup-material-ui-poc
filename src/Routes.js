import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Subscription from "./pages/Subscription";
import Tickets from "./pages/Tickets";

export default function Routes({ children }) {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <RouteWrapper path="/" exact component={Home} />
        <RouteWrapper path="/subscription" component={Subscription} />
        <RouteWrapper path="/tickets" component={Tickets} />
        {/* <RouteWrapper isPrivate={false} path='/login' component={Login} />

        {/* Redirects a user to a valid path in case of 404 */}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

function RouteWrapper({ component, isPrivate, ...rest }) {
  const isLogged = () => false;
  const logged = isLogged();

  if (isPrivate && !logged) {
    return <Redirect to="/login" />;
  }

  if (!isPrivate && logged) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} component={component} />;
}
