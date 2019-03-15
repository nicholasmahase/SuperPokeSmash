import React, { Component } from "react";
import Image from "./poke-ball-icon-27.png";
import "./about.css";
export default class About extends Component {
    
    render() {
    return (
    <div>
        <div className="container">
            <div className="row">
            <h1 className="page title">About Super Poke Smash</h1>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="media">
                    <img className="aboutimage" src={Image} alt="pokeballs" />
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="media-body">
                    <p>Super Poke Smash</p>
                </div>
            </div>
        </div>
    </div>    
 
  );
}
}


