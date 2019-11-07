import React from 'react';

import Heading from "./Components/Heading";
import Counter from "./Components/Counter";
import ModalInstruction from "./Components/utils/modal";

import "./bootstrap.min.css"

function App(): any {

    const buttonName = 'Click me';
    const instructions = [
        'Click on counter label for increase counter by one',
        'Shift + click for increase counter by ten',
        'Alt + click for decrease counter by one',
        'Alt + Shift + click for decrease by ten'
    ];
    const title = 'Instruction';

    return (
        <div className="container">
            <Heading name="react"/>
            <ModalInstruction button={buttonName} title={title} list={instructions} />
            <Counter label="Current" />
            <p>Nice TDD</p>
        </div>
    )
}

export default App;
