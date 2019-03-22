import React, { Component } from "react";
import "./pokedex.css";

var PokedexA = require('pokedex'),
pokedex = new PokedexA();

console.log( pokedex.pokemon()[0] );
// document.write( pokedex.pokemon()[0].name );
// document.write( pokedex.pokemon()[0].sprites.normal );



export default class Pokedex extends Component {

    render() {
    return (
        
    <div>
        <div className="container">
            <div className="row">
            <h1 className="page title">Pokedex</h1>
            </div>
        </div>
            <table className="table">
    <thead className="thead-dark">
        <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td></td>
        <td>Otto</td>
        <td>@mdo</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
        </tr>
    </tbody>
    </table>
</div>    
 
  );
}
}


