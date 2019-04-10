import React from 'react';
import TextInput from './TextInput';
import Panel from './Panel';

class UserList extends React.Component {


  constructor(props) {
    super(props)
    this.state = { search: '', users: this.props.users, filterdUsers: this.props.users, selectedUser: undefined }
    this.setSearch = this.setSearch.bind(this);
    this.inputClickHandler = this.inputClickHandler.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({ users: nextProps.users, filterdUsers: nextProps.users });
    this.clearSelection();
  }

  setSearch(value) {
    
    
    this.setState({ search: value });
    let users = this.state.users;
    users = users.filter((arr) => { return arr.name.first.toLowerCase().includes(value.toLowerCase()) || arr.name.last.toLowerCase().includes(value.toLowerCase()); });
    
    this.setState({ filterdUsers: users });
    
    this.clearSelection();
    
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
      let style = { width: 48, height: 48 };


      children.push(<td key={i} style={{ style }} onClick={(e) => this.inputClickHandler(e, user)}>
        <img src={user.picture.thumbnail} alt={user.name.first + ' ' + user.name.last}

        />
        <div>{user.name.first + ' ' + user.name.last}</div>
      </td>)


      if (((i + 1) % 3 === 0) || i + 1 === this.state.filterdUsers.length) {
        table.push(<tr key={i}>{children}</tr>);
        children = [];
      }
    }
    return table
  }

  inputClickHandler(e, user) {
    if (this.props.isAllowedSelection === false)
      return;
    this.props.onSelectUser(user);
    let lastCell = this.state.lastCell;
    if (lastCell !== undefined) {
      lastCell.style.border = 'none';
    }
    e = e || window.event;
    var tdElm = e.target || e.srcElement;
    if (e.target.parentNode.nodeName === 'TD')
      tdElm = e.target.parentNode;

    tdElm.style.border = '2px solid #1E90FF';
    this.setState({ lastCell: tdElm });
  }

  clearSelection() {
    let lastCell = this.state.lastCell;
    if (lastCell !== undefined) {
      lastCell.style.border = 'none';
    }
  }



  render() {


    return (
      <div style={{ width: 400, height: 550 }}>
        <TextInput type="text" value={this.state.search} onChange={(event) => this.setSearch(event.target.value)} placeholder="Search" />
        {this.renderX()}
        <Panel width={400} height={500} style={{ paddingTop: 10 }}>
          <h2>{this.props.title}</h2>

          <table >
            <tbody style={{
              display: 'block', height: 360, overflow: 'scroll',
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