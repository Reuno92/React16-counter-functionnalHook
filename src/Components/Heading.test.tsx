import React from 'react';
import Heading from "./Heading";
import {shallow} from "enzyme";

it('generates a label', () => {
    const wrapper = shallow(<Heading name="react" />);
    expect(wrapper.find('h1').text()).toBe("Hello REACT");
});
