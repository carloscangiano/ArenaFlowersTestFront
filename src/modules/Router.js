import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import Home from '../components/Home';

export default function Router () {
    return (
      <React.Fragment>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
}