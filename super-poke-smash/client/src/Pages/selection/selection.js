import React, { Component } from "react";

import CustomText from "../components/CustomText";
import PokemonList from "../components/PokemonList";
import ActionList from "../components/ActionList";

class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return <div> Hellos </div>;
  }
}

export default Selection;
