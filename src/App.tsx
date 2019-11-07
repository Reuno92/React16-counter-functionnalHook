import React from 'react';
import Heading from "./Components/Heading";
import Counter from "./Components/Counter";
import "./bootstrap.min.css"

function App(): any {

    const buttonName = 'Click me';
    const instructions = `Click on counter label for increase counter by one and Shift + Click for increase counter by ten`;

    return (
        <div>
            <Heading name="react"/>
            <button onClick={
                () => handleClick(instructions)}>
                { buttonName }
            </button>
            <Counter label="Current" />
            <p>Nice TDD</p>
        </div>
    )
}

function handleClick(text: string): void {
    alert(text);
}

export default App;
