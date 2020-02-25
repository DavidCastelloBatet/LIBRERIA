import React, { Component } from "react";
import Header from "./components/Header.js";
import Booklist from "./components/Booklist";

import Css from "./app.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Booklist />
      </div>
    );
  }
}

export default App;
