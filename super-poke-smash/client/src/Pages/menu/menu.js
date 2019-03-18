import React, { Component } from "react";
import BackGroundImage from "./pokemon-background.jpg";
import "./menu.css";
export default class Menu extends Component {
    
    render() {
    return (
    <div>
        <div className="container">
            <div className="row">
            <h1 className="page title">Menu</h1>
            </div>
        </div>
        <div className="container">
        <img className="backgroundimage" src={BackGroundImage} alt="pokemon background" />
            <div className="row">
                <div className="col-md-12">
                    <div className="menulist">
                        <ul>
                            <li><a className="startgame" href="/mode">Start Game</a></li>
                            <li><a className="pokedex" href="/pokedex">Pokedex</a></li>
                            <li><a className="rules" href="/rules">Rules</a></li>
                            <li><a className="about" href="/about">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>    
 
  );
}
}


