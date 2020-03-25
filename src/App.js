import React, { Component } from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainPage />
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
