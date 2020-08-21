import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";

function App() {
  return (
    <BrowserRouter basename={"/prepr"}>
      <Route path={"/"} component={Home} />
    </BrowserRouter>
  );
}

export default App;
