import React, {useState} from 'react';

function Counter(props: any): any {
    const [count, setCount] = useState(0);

    const onCounterAction = (event: React.MouseEvent<HTMLElement>) => {
        if (event.shiftKey && event.altKey) {
            setCount(count - 10);
        } else if (event.altKey) {
            setCount(count - 1);
        } else if (event.shiftKey) {
            setCount(count + 10);
        } else {
            setCount(count + 1);
        }
    };

    return (
        <div className="counter mt-3"
             onClick={ onCounterAction }>
            <label className="pr-2 text-white">{props.label}</label>
            <span>{count}</span>
        </div>
    )
}

export default Counter
