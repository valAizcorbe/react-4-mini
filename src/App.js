import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import "./App.css";
//import{HashRouter as Router} from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import router from './router'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          {router}
        </div>
      </HashRouter>
    );
  }
}

export default App;
