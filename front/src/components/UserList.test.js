// UserList.test.js
import React from 'react';
import UserList from './UserList';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    shallow(<UserList users={[{
        _id: 1,
        name: { first: 'Mike', last: 'Rich' },
        picture: { thumbnail: '' }
    }
    ]} title={'All Users'} isAllowedSelection={true} />);
});

it('check search and title', () => {
    const wrapper = shallow(<UserList users={[{
        _id: 1,
        name: { first: 'Mike', last: 'Rich' },
        picture: { thumbnail: '' }
    }, {
        _id: 2,
        name: { first: 'Ross', last: 'Tom' },
        picture: { thumbnail: '' }
    }
    ]} title={'All Users'} isAllowedSelection={true} />);

    const title = 'All Users';

    expect(wrapper.contains(title)).toEqual(true);
    wrapper.instance().setSearch('rich');

    expect(wrapper.instance().state.search).toEqual('rich');
    expect(wrapper.instance().state.filterdUsers.length).toEqual(1);
});