import {shallow} from "enzyme";
import Counter from "./Counter";
import React from "react";


const wrapper = shallow(<Counter label={'Current'} />);
it('should render a counter', () => {
   expect(wrapper.find('.counter label').text())
       .toBe('Current');
});

it('should default start at zero', () => {
   expect(wrapper.find('.counter span').text()).toBe('0');
});
