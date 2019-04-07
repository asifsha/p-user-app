import React from 'react';
import TextInput from './TextInput';
import Panel from './Panel';

class UserList extends React.Component {
  

  constructor(props) {
    super(props)
    this.state = { search: '', users: this.props.users, filterdUsers: this.props.users }
    this.setSearch = this.setSearch.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({ users: nextProps.users, filterdUsers:nextProps.users });
  }

  setSearch(value) {
    this.setState({ search: value });
    let users = this.state.users;
    users = users.filter((arr) => { return arr.name.first.toLowerCase().includes(value.toLowerCase()) || arr.name.last.toLowerCase().includes(value.toLowerCase()); });
    this.setState({ filterdUsers: users });
  }

  resetSearch() {
    this.setState({ search: '' });
    let users = this.state.users;
    this.setState({ filterdUsers: users });
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

    let children = []
    
    for (let i = 0; i < this.state.filterdUsers.length; i++) {
      let user = this.state.filterdUsers[i];
      
     
        children.push(<td style={{ width: 48, height: 48 }}>
          <img src={user.picture.thumbnail} alt={user.name.first + ' ' + user.name.last} />
           <div>{user.name.first + ' ' + user.name.last}</div>
           </td>)
    
      
      if( (i+1 ) % 3 === 0)
      {
        table.push(<tr>{children}</tr>);
        children=[];
      }
    }
    return table
  }

  

  render() {
   

    return (
      <div style={{ width: 400, height: 600 }}>
        <TextInput type="text" value={this.state.search} onChange={(event) => this.setSearch(event.target.value)} placeholder="Search" />
        {this.renderX()}
        <Panel width={400} height={500} style={{ paddingTop: 10 }}>
          <h2>{this.props.title}</h2>

          <table >
            <tbody style={{display: 'block', height:360, overflow:'scroll',
          }}>
            {this.createTable()}
            </tbody>
          </table>    
  
        </Panel>

      </div>
    );
  }
}
export default UserList;