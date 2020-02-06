import React from "react";
import Main from "./Main";
//import About from "./components/About";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Route exact path='/' component={Main} />
        <Route exact path='/about' component={About} />
        <Footer />
      </div>
    );
  }
}

export default App;
