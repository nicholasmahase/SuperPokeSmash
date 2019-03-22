import React, { Component } from "react";
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from './Pokemon';
import "./styles/pokedex.css";

export default class Pokedex extends Component {

    constructor() {
        super();
        this.state = {
            pokemon: {}
        };

        this.handleOnClick = this.handleOnClick.bind(this);

      }

     // Inside the App class
     handleOnClick(id) {
        fetch(`https://cors-anywhere.herokuapp.com/http://pokeapi.co/api/v2/pokemon/${id}/`)
          .then(res => res.json())
          .then(data => {
            const pokemon = new Pokemon(data);
    
            this.setState({ pokemon });
          })
          .catch(err => console.log(err));
      }
      render() {
        return (
          <div className="pokedex">
            <PokeList handleOnClick={this.handleOnClick} />
            <DetailView pokemon={this.state.pokemon} />
          </div>
        );
      }
    }


