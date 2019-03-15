import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./login/Login";
import About from './Pages/about/about.js';




class App extends Component {
  render() {
    return (
      <div>   
          <BrowserRouter>
      <div className="">
          <Route exact path="/" component={Login} />
          <Route path="/about" component={About} />
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
