import React, { Component } from "react";
import "./Signup.css";

import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    //AXion POST REQUEST
    // console.log(this.state);
    //TODO POST REQUEST TO /api/users/register
    axios
      .post("/api/users/register", { user: this.state })
      .then(function(res) {
        console.log(res);
        //Once registerd redirect them to /login
        window.location.href = "./signin";
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account!</p>
          <form id="signup" name="signup" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="row clearfix">
                <div className="col-xs-4">
                  <input
                    type="text"
                    className="text form-control"
                    name="firstname"
                    placeholder="First Name"
                    value={this.state.firstname}
                    onChange={this.handleChange}
                    required="required"
                  />
                </div>
                <div className="col-xs-4">
                  <input
                    type="text"
                    className="text form-control"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                    placeholder="Last Name"
                    required="required"
                  />
                </div>
                <div className="col-xs-4">
                  <input
                    type="text"
                    className="text form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    placeholder="Username"
                    required="required"
                  />
                </div>
                <div className="col-xs-4">
                  <input
                    type="email"
                    className="text form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                    required="required"
                  />
                </div>
                <div className="col-xs-4">
                  <input
                    type="password"
                    className="text form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                    required="required"
                  />
                </div>
                <div className="col-xs-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg signup"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </form>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            <div className="hint-text">
              Already have an account?{" "}
              <a className="loginlink" href="/signin">
                Login here
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
