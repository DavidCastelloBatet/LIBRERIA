import React, { Component } from "react";
import logo from "./logo.png";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="logo">
            <img src={logo} alt="logo" width="150" />
          </div>
          <div>
            <h1>
              <span className="h1Inicial">L</span>libreria{" "}
              <span className="h1Inicial">U</span>BIQUM
            </h1>
            <h3>- Versió Framework React amb Search -</h3>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
