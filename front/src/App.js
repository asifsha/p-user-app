import React, { Component } from 'react';
import UserList from './components/UserList';
import './App.css';
import ServiceApi from './api/ServiceApi'

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.loadData();

  }

  async loadData() {
    let data = await ServiceApi.getUsers();
    console.log(data[0].results);
    this.setState({ users: data[0].results | [] });
  }
  render() {
    return (
      <div className="App">
        <div style={{ float: 'left', width: 400, paddingLeft: 10 }}>
          <UserList title={'All Users'} users={this.state.users} style={{ paddingLeft: 10 }}></UserList>
        </div>
        <div style={{ float: 'right' }}>
          <UserList title={'Assigned Users'} users={this.state.users} style={{ paddingLeft: 10 }}></UserList>
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
