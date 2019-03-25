import React, { Component } from "react";
import Image from "./poke-ball-icon-27.png";
import Image2 from "./krish.jpg";
import Image3 from "./nicholas.jpg";
import Image4 from "./mamoo.jpg";
import "./about.css";
export default class About extends Component {
    
    render() {
    return (
    <div>
        <div className="container">
            <div className="row">
            <h1 className="page title">About The Super-Poke-Smash Team</h1>
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
        <div className="card">
  <img className="krishimage" src={Image2} alt="krish" />
  <div className="card-body">
    <p className="card-text">Khristian is the SME for this project. His insight and knowledge about the Pokeverse helped to shape this project from a seedling into a blooming application.<br></br>
    Fun Fact: Khristian grew up in the gully streets of Bangladesh and is  known by his scooter alias KRSBOT</p>
  </div>
</div>
        </div>

        <div className="container" id="nich">
        <div className="card" >
  <img className="nichImage" src={Image3} alt="nicholas" />
  <div className="card-body">
    <p className="card-text">Nicholas is the technical lead for Super-Pokey-Smash. He is willing to learn new things and always delivers his best - even if it is subpar by most standards.<br></br>
    Fun Fact: Nicholas did not born so, somebody woefully did him so!</p>
  </div>
</div>
        </div>
    
        <div className="container" id="rich">
        <div className="card">
  <img className="richImage" src={Image4} alt="mamoo" />
  <div className="card-body">
    <p className="card-text">Richard is the project manager for Super-Pokey-Smash and brings a vast amount of knowledge, skills, and coconut oil to the team. Richard was introduced to Pokey-Smash from various places - spanning accross provinces, before joining the Super-Pokey-Smash team.<br></br>
    Fun Fact: Richard used to spend $400/month on Airport grade tar to curl his jerries.</p>
  </div>
</div>
        </div>  
    
    
    </div>  

 
  );
}
}


