import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  shallow(<App />);
});

it('renders add button', () => {
  const wrapper = shallow(<App />);
  
  const add ='Add';
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(add)).toEqual(true);
});

