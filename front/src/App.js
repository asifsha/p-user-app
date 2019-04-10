import React, { Component } from 'react';
import UserList from './components/UserList';
import './App.css';
import ServiceApi from './api/ServiceApi'

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      assignedUsers: []
    }
    this.selectUser = this.selectUser.bind(this);
  }

  componentDidMount() {
    this.loadData();

  }

  async loadData() {
    ServiceApi.getUsers().then(response => {
      
      this.setState({ users: response || [] });
    });

    ServiceApi.getAssingedUsers().then(response => {
      
      this.setState({ assignedUsers: response || [] });

    });


  }

  selectUser(user) {
    
    this.setState({ selectedUser: user });

  }

  add() {
    if (this.state.selectedUser === undefined || this.state.selectedUser === null) {
      this.setState({ error: true, errorMsg: 'Please select a user to assign.' });
      return;
    }

    ServiceApi.assignUser(this.state.selectedUser).then((res) => {
      this.setState({ selectUser: null });
      this.loadData();
    }).catch((err) => {
      this.setState({ error: true, errorMsg: 'Error while assigning user.<br/>' + err })
    })

  }
  render() {
    return (
      <div className="App">
        {this.state.error === true && <div style={{ color: '#8B0000' }} dangerouslySetInnerHTML={{ __html: this.state.errorMsg }}></div>}
        <table>
          <tbody>
          <tr>
            <td>
              <div style={{ width: 400, paddingLeft: 10 }}>
                <UserList title={'All Users'} users={this.state.users}
                  onSelectUser={this.selectUser}
                  isAllowedSelection={true}
                  style={{ paddingLeft: 10 }}></UserList>
              </div>
            </td>
            <td>
              <div style={{ width: 400 }}>
                <UserList title={'Assigned Users'}
                  users={this.state.assignedUsers}
                  isAllowedSelection={false}
                  style={{ paddingLeft: 10 }}></UserList>
              </div>
            </td>
          </tr>
          <tr>
            <td> <button style={{ backgroundColor: '#1E90FF', color: '#fff', width: 120 }} onClick={() => this.add()}>Add</button></td>
            <td></td>
          </tr>
          </tbody>
        </table>



      </div>
    );
  }
}

export default App;
