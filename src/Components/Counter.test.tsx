import {shallow} from "enzyme";
import Counter from "./Counter";
import React from "react";

it('should render a counter', () => {
   const wrapper = shallow(<Counter label={'Current'} />);
   expect(wrapper.find('.counter label').text())
       .toBe('Current');
});
