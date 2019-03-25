import React, { Component } from "react";
import "./Signin.css";

import axios from "axios";
import jwt_decode from "jwt-decode";
//CHeck to see if the token is already stored here
// if (localStorage.jwtToken) {
//   const decode = jwt_decode(localStorage.jwtToken);
//   console.log(decode);

//   const currentTime = Date.now();
//   if (decode.exp < currentTime) {
//     window.location.href = "./menu";
//   } else {
//     window.location.href = "./";
//   }
// } else {
//   window.location.href = "./";
// }

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    axios
      .post("/api/users/login", { user: this.state })
      .then(function(res) {
        //Fisrt we want to authenticate him,
        //We got to store the token in the localstorage
        // window.location.href = "./signin";
        //Save to localStorage
        const { token } = res.data;
        // Set to localStorage
        localStorage.setItem("jwtToken", token);

        //Set the axioon header with the token

        if (token) {
          axios.defaults.headers.common["Authorization"] = token;
          window.location.href = "./menu";
        } else {
          delete axios.defaults.headers.common["Authorization"];
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h1>Sign In</h1>
            </div>
            <div className="card-body">
              <form
                id="signin"
                name="signin"
                method="post"
                onSubmit={this.handleSubmit}
              >
                <div className="col-xs-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-xs-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key" />
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-xs-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg signup"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?{" "}
                <a className="loginlink" href="/">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
