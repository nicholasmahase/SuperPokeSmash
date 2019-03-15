import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./containers/Login";




class App extends Component {
  render() {
    return (
      <div>   
          <BrowserRouter>
      <div className="Login">
          <Route path="/login" exact component={Login} />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
