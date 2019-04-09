import React from 'react';
import TextInput from './TextInput';
import Panel from './Panel';

class UserList extends React.Component {
  

  constructor(props) {
    super(props)
    this.state = { search: '', users: this.props.users, filterdUsers: this.props.users }
    this.setSearch = this.setSearch.bind(this);
    this.inputClickHandler=this.inputClickHandler.bind(this);
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
      
     
        children.push(<td key={i} style={{ width: 48, height: 48 }} onClick = {(e)=>this.inputClickHandler(e)}>
          <img src={user.picture.thumbnail} alt={user.name.first + ' ' + user.name.last} 
          onClick={()=> this.props.onSelectUser(user)}/>
           <div>{user.name.first + ' ' + user.name.last}</div>
           </td>)
    
      
      if( ((i+1 ) % 3 === 0 ) || i+1 === this.state.filterdUsers.length ) 
      {
        table.push(<tr key={i}>{children}</tr>);
        children=[];
      }
    }
    return table
  }

  inputClickHandler(e){
    console.log('incluck');
    console.log(e);
    e = e||window.event;
    var tdElm = e.target||e.srcElement;
    tdElm.style.border='1 solid #fff';
    // //if(tdElm.style.border === 'rgb(255, 0, 0)'){
    //     tdElm.style.backgroundColor = '#fff';
    // } else {
    //     tdElm.style.backgroundColor = '#f00';
    // }
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