import React, {Component} from 'react';
import Heading from "./Components/heading";

class App extends Component {

    public handleClick(name: string): void {
        return alert(name);
    }

    render() {
        return (
            <div>
                <Heading name="react"/>
                <button onClick={ () => this.handleClick('Hello World') }>
                    Click me
                </button>
                <p>Nice TDD</p>
            </div>
        );
    }
}

export default App;
