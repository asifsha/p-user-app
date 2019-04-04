import React, { useState } from 'react';
import TextInput from './TextInput';
import Panel from './Panel';

function UserList(props) {
  // Declare a new state variable, which we'll call "count"
  const [search, setSearch] = useState('');

  return (
    <div style={{ width: 400, height: 600 }}>
      <TextInput type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search" />
      <Panel width={400} height={500} style={{paddingTop:10}}>
<h2>{props.title}</h2>
      </Panel>

    </div>
  );
}

export default UserList;