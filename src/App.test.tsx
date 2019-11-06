import React from 'react';
import App from './App';
import {mount, shallow} from "enzyme";

it('renders the app and the heading', () => {
   const wrapper = mount(<App />);
   expect(wrapper.find('h1').text())
       .toBe('Hello REACT');
   expect(wrapper.find('.counter label').text())
       .toBe('Current')
});

it('renders the paragraph', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('p').text()).toBe('Nice TDD');
});

it('renders the button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('button').text()).toBe('Click me');
});
