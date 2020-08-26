import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter basename={"/prepr"}>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/contact"} component={Contact} />
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
