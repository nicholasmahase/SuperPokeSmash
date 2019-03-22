import React, { Component } from "react";

import pokeman from "../../data/pokemon_data";

class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeman: []
    };
  }

  componentDidMount = () => {
    this.setState({ pokeman });
  };
  render() {
    console.log(this.state.pokeman);

    return (
      <React.Fragment>
        {this.state.pokeman.map((item, index) => (
          <div id = "selectionDiv" key={index}>
            {item.id} --- {item.label}
            <img src={item.sprite} />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Selection;
