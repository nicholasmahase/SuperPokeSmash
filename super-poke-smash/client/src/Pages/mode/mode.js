import React, { Component } from "react";
import "./mode.css";
export default class Mode extends Component {

   render() {
   return (
   <div>
     <div className="jumbotron">
       <h1>Game Mode</h1>
       <button type="button" id="singleBtn" className="btn btn-primary">Single Player</button>
       <button type="button" id="multiBtn" className="btn btn-success">Multiplayer</button>
       </div>
       </div>
 );
}
}