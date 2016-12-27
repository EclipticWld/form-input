import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';
import MaterialUiForm from './form/MaterialUiForm';

class AppContainer extends Component {
  handleSubmit = (data) => {
    window.alert(JSON.stringify(data));
    fetch('url', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  render() {
    console.log('fetch', fetch)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{padding: '0 0 0 90px'}}>
          <MaterialUiForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default AppContainer;
