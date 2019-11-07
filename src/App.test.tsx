import React from 'react';
import App from './App';
import {mount, shallow} from "enzyme";

it('renders the app and the heading', () => {
   const wrapper = mount(<App />);
   expect(wrapper.find('h1').text())
       .toBe('Hello REACT');
   expect(wrapper.find('.counter label').text())
       .toBe('Current');
   expect(wrapper.find('.counter span').text())
       .toBe('0');
    expect(wrapper.find('.btn.btn-primary').text())
        .toBe('Click me');
});

it('renders the paragraph', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('p').text())
        .toBe('Nice TDD');
});
