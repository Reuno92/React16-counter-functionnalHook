import {shallow} from "enzyme";
import Counter from "./Counter";
import React from "react";



const initialWrapper = shallow(<Counter label={'Current'} />);

it('should render a counter', () => {
   expect(initialWrapper.find('.counter label').text())
       .toBe('Current');
});

it('should default start at zero', () => {
   expect(initialWrapper.find('.counter span').text()).toBe("0");
});

it('should increment the count by one', () => {
   expect(initialWrapper.find('.counter span').text()).toBe('0');
    initialWrapper.find('.counter').simulate('click', { shiftKey: false });
   expect(initialWrapper.find('.counter span').text()).toBe('1');
});

it('should increment the count by ten', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('.counter span').text()).toBe('0');
    wrapper.find('.counter').simulate('click', { shiftKey: true });
    expect(wrapper.find('.counter span').text()).toBe('10');
});

it('should decrement the count by one', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('.counter span').text()).toBe('0');
    wrapper.find('.counter').simulate('click', { altKey: true });
    expect(wrapper.find('.counter span').text()).toBe('-1');
});

it('should decrement the count by one', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('.counter span').text()).toBe('0');
    wrapper.find('.counter').simulate('click', { altKey: true, shiftKey: true });
    expect(wrapper.find('.counter span').text()).toBe('-10');
});
