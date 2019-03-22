import React, { Component } from "react";
import "./mode.css";
export default class Mode extends Component {

   render() {
   return (
   <div>
     <div className="jumbotron">
       <h1>Choose Your Game Mode !</h1>
       </div>
       <div>
       <a button type="button" id="singleBtn" className="btn btn-primary btn-lg btn-block" href="/selection">Single Player</a>
       <a button type="button" id="multiBtn" className="btn btn-primary btn-lg btn-block" href="/multi">MultiPlayer</a>
       </div>
       </div>
 );
}
}