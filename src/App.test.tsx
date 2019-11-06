import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from "enzyme";

it('generates a label', () => {
   const a = new App({});
   expect(a.label('React')).toBe('Hello REACT');
});

it('renders the heading', () => {
   const wrapper = shallow(<App />);
   expect(wrapper.find('h1').text()).toBe('Hello REACT');
});

it('renders the paragraph', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('p').text()).toBe('Nice TDD');
});
