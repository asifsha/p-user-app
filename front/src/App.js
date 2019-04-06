import React, { Component } from 'react';
import UserList from './components/UserList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ float: 'left', width: 400 }}>
          <UserList title={'All Users'} images={[]} style={{ paddingLeft: 10 }}></UserList>
        </div>
        <div style={{ float:'right' }}>
          <UserList title={'Assigned Users'} images={[]} style={{ paddingLeft: 10}}></UserList>
        </div>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
