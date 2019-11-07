import React, { Component } from 'react';
import {CounterModel} from "../models/counter.model";
import {CounterStateModel} from "../models/CounterState.model";

class Counter extends Component<CounterModel, CounterStateModel> {
    static defaultProps = { label: 'Current' };

    constructor(props: CounterModel) {
        super(props);
        const COUNT = props.start ? props.start : 0;
        this.state = {
            count: COUNT
        }
    }

    public handleClick = (event: React.MouseEvent<HTMLElement>) => {
        const inc = event.shiftKey ? 10 : 1;
        this.setState({count: this.state.count + inc });
    };

    render() {
        return (
            <div className="counter" onClick={this.handleClick}>
                <label>{ this.props.label }</label>
                <span>{ this.state.count }</span>
            </div>
        )
    }
}

export default Counter
