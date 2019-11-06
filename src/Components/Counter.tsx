import React, { Component } from 'react';
import {CounterModel} from "../models/counter.model";

class Counter extends Component<CounterModel> {
    static defaultProps = { label: 'Current' };

    render() {
        return (
            <div className="counter">
                <label>{ this.props.label }</label>
                <span>1</span>
            </div>
        )
    }
}

export default Counter
