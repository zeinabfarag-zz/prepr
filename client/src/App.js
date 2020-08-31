import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Services from "./Services";

function App() {
  return (
    <BrowserRouter basename={"/prepr"}>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/about-us"} component={AboutUs}/>
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/services"} component={Services} />
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
