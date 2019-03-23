/* import React, { Component } from "react";

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
            <img src={item.sprite} alt=""/>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Selection; */

import React from "react";
import PlayerList from '../../components/playerList/playerList'
import Header from '../../components/header/header';
import {endBattle} from '../../actions/playerActions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({ started: state.battle.started });

class Selection extends React.Component {

	componentDidMount() {
		if (this.props.started === true) {
			this.props.dispatch(endBattle());
		}
  	}

	render() {
		return(
			<div>
				<Header>
					<small>select your Pokémon</small>
				</Header>
                <PlayerList />
	        </div>
		);
	}
}

export default connect(mapStateToProps)(Selection)


