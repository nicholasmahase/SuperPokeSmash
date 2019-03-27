import React, { Component } from "react";
import "./battle.css";
class Battle extends Component {
    
    render() {
    return (
    <div>
    <div className="instructions">
        <p>Choose your Pokemon</p>
      </div>
      
      <section className="characters"></section>
      
      <section className="stadium">
        <section className="enemy"></section>
        <section className="hero"></section>
      </section>
      
      
      <ul className="attack-list"></ul>
  
    
    
    <div className="audio">
      <audio className="sfx"></audio>
      <audio className="music" loop></audio>
    </div>
    
    <div className="modal-out">
      <div className="modal-in">
        <header></header>
        <section></section>
        <footer></footer>
      </div>
    </div>

 </div>
  );
}
}
export default connect(mapStateToProps)(Battle);
