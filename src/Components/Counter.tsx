import React, { Component } from 'react';
import {CounterModel} from "../models/counter.model";
import {CounterStateModel} from "../models/CounterState.model";

class Counter extends Component<CounterModel, CounterStateModel> {
    static defaultProps = { label: 'Current' };

    constructor(props: CounterModel) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div className="counter">
                <label>{ this.props.label }</label>
                <span>{ this.state.count }</span>
            </div>
        )
    }
}

export default Counter
