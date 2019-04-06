import React from 'react';
import TextInput from './TextInput';
import Panel from './Panel';

class UserList extends React.Component {
  // Declare a new state variable, which we'll call "count"

  constructor(props) {
    super(props)
    this.state = { search: '', users: this.props.users, filterdUsers: this.props.users }
    this.setSearch = this.setSearch.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState){
    this.setState({users:nextProps.users});
  }

  setSearch(value) {
    this.setState({ search: value });
    let users = this.state.users;
    users = users.filter((arr) => { return arr.name.first.toLowerCase().includes(value.toLowerCase()) || arr.name.last.toLowerCase().includes(value.toLowerCase()); });
    this.setState({ filterdUsers: users });
  }

  resetSearch() {
    this.setState({ search: '' });
  }

  renderX() {
    if (this.state.search === '' || this.state.search === undefined)
      return '';
    return (<button onClick={() => this.resetSearch()}>
      X
  </button>);
  }

  createTable() {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < this.state.filterdUsers.length; i++) {
      let user = this.state.filterdUsers[i];
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 3; j++) {
        children.push(<td style={{ width: 48, height: 48 }}>{`<img src=${user.pictures.thumbnail} alt=${user.name.first + user.name.last} /> ${j + 1}`}</td>)
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return table
  }
  render() {
    console.log(this.state.users);
    return (
      <div style={{ width: 400, height: 600 }}>
        <TextInput type="text" value={this.state.search} onChange={(event) => this.setSearch(event.target.value)} placeholder="Search" />
        {this.renderX()}
        <Panel width={400} height={500} style={{ paddingTop: 10 }}>
          <h2>{this.props.title}</h2>

          <table>
            {this.createTable()}
          </table>
        </Panel>

      </div>
    );
  }
}
export default UserList;