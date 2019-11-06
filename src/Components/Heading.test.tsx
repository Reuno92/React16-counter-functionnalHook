import React from 'react';
import {shallow} from "enzyme";
import Heading from "./heading";

it('generates a label', () => {
    const wrapper = shallow(<Heading name="react" />);
    expect(wrapper.find('h1').text()).toBe("Hello REACT");
});
