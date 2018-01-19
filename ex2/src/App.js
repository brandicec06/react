import React, { Component } from 'react';
import './App.css';
import Header from './Components/header/Header'
import TeslaBattery from './containers/TeslaBattery'

import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TeslaBattery />
      </div>
    );
  }
}

export default App;
