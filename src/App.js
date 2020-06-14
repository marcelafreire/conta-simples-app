import React, { Component } from "react";
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/style/css/home.css"
import "../src/style/css/payments.css"
import "../src/style/css/nav.css"
import "../src/style/css/responsive.css"


class App extends Component {
  render() {
    return (
      <div className="">
      <Home />
      </div>
    );
  }
}

export default App;
