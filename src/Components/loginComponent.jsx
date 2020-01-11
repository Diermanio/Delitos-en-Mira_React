import React, { Component } from "react";
import loginf from "../assets/js/loginfocus";
import "../assets/css/stylelogin.css";
import LogIn from "../assets/js/login";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="log">
          <body>
            <form class="login-form">
              <h1>Login </h1>

              <div class="txtb">
                <input id="username" type="text"></input>
                <span data-placeholder="Username"></span>
              </div>

              <div class="txtb">
                <input id="password" type="password"></input>
                <span data-placeholder="Password"></span>
              </div>

              <input id="login" class="logbtn" value="Login"></input>

              <div class="bottom-text">
                Don't have account? <a href="register.html">Sign up</a>
              </div>
            </form>
          </body>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    loginf();
    LogIn();
  }
}

export default Login;
