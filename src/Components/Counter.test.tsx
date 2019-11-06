import {shallow} from "enzyme";
import Counter from "./Counter";
import React from "react";

it('should render a counter', () => {
   const wrapper = shallow(<Counter />);
   expect(wrapper.find('.counter label').text())
       .toBe('Count');
});
