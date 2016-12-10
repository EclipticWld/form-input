import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MaterialUiForm from './form/MaterialUiForm';

class AppContainer extends Component {
  submitContact = (data) => {
    window.alert(JSON.stringify(data));
  }

  render() {
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
          <MaterialUiForm onSubmit={this.submitContact} />
        </div>
      </div>
    );
  }

}

export default AppContainer;
