import React, {useState} from 'react';

function Counter(props: any) {
    const [count, setCount] = useState(0);

    const onCounterIncrease = (event: React.MouseEvent<HTMLElement>) => {
        const action = event.shiftKey ? 10 : 1;
        setCount(count + action);
    };

    return (
        <div className="counter" onClick={ onCounterIncrease }>
            <label>{ props.label }</label>
            <span>{ count }</span>
        </div>
    )
}

export default Counter
