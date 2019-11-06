import React from 'react';
import App from './App';
import {shallow} from "enzyme";
import Heading from "./Components/Heading";

xit('renders the heading', () => {
   const wrapper = shallow(<App />);
    expect(wrapper.equals(<Heading/>));
});

it('renders the paragraph', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('p').text()).toBe('Nice TDD');
});

it('renders the button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('button').text()).toBe('Click me');
});
