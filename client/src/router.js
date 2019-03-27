import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import selection from "./Pages/selection/selection.js";
// import battle from './Pages/battle/battlepage.js';
import { connect } from "react-redux";
import localForage from "localforage";
import axios from "axios";
import { loadApi } from "./actions/playerActions";
import { BrowserRouter } from "react-router-dom";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import About from "./Pages/about/about.js";
import Arena from "./Pages/arena/arena.js";
import Battle from "./Pages/battle/battle.js";
import Menu from "./Pages/menu/menu.js";
import Mode from "./Pages/mode/mode.js";
import Pokedex from "./Pages/pokedex/pokedex.js";
import Selection from "./Pages/selection/selection.js";
import LiveChat from "./livechat/chat";

const mapStateToProps = state => ({ api: state.api });

class Router extends Component {
  constructor(props) {
    super(props);
    localForage.getItem("backends").then(value => {
      if (value) {
        return props.dispatch(loadApi(value));
      }
      axios.get(props.api.url).then(response => {
        let data = {
          selected: response.data[0],
          engines: response.data
        };
        localForage.setItem("backends", data);
        props.dispatch(loadApi(data));
      });
    });
  }

  render() {
    return (
      <div>
        {this.props.api.selected ? (
          <BrowserRouter>
            <Switch>
              <Route exact path="/selection" component={selection} />
              <Route exact path="/" component={Signup} />
              <Route exact path="/signin" component={Signin} />
              <Route path="/about" component={About} />
              <Route path="/chat" component={LiveChat} />
              <Route path="/arena" component={Arena} />
              <Route path="/battle" component={Battle} />
              <Route path="/menu" component={Menu} />
              <Route path="/mode" component={Mode} />
              <Route path="/pokedex" component={Pokedex} />
              <Route path="/selection" component={Selection} />
            </Switch>
          </BrowserRouter>
        ) : (
          <div style={{ padding: "10px" }}>App Will Start Shortly ...</div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Router);
