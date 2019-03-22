import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import About from './Pages/about/about.js';
import Arena from './Pages/arena/arena.js';
import Menu from './Pages/menu/menu.js';
import Mode from './Pages/mode/mode.js';
import Pokedex from './Pages/pokedex/pokedex.js';
import Rules from './Pages/rules/rules.js';
import Selection from './Pages/selection/selection.js';
import LiveChat from "./livechat/chat";




class App extends Component {
  render() {
    return (
      <div>   
          <BrowserRouter>
      <div className="">
          <Route exact path="/" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route path="/about" component={About} />
          <Route path="/chat" component={LiveChat} />
          <Route path="/arena" component={Arena} />
          <Route path="/menu" component={Menu} />
          <Route path="/mode" component={Mode} />
          <Route path="/pokedex" component={Pokedex} />
          <Route path="/rules" component={Rules} />
          <Route path="/selection" component={Selection} />


      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
