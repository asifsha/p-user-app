import React from 'react';
import TextInput from './TextInput';
import Panel from './Panel';

class UserList extends React.Component {
  // Declare a new state variable, which we'll call "count"

  constructor(props){
    super(props )
    this.state={search:''}
    this.setSearch=this.setSearch.bind();
  }

  setSearch(value){
    this.setState({'search':value});
  }

  createTable() {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < this.props.images.length; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 3; j++) {
        children.push(<td style={{width:48,height:48}}>{`Column ${j + 1}`}</td>)
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return table
  }
  render() {
    return (
      <div style={{ width: 400, height: 600 }}>
        <TextInput type="text" value={this.state.search} onChange={(event) => this.setSearch(event.target.value)} placeholder="Search" />
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