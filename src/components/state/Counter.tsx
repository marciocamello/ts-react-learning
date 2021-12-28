import { useReducer } from "react";

type CounterState = {
    count: number;
}

type UpdateAction = {
    type: 'INCREMENT' | 'DECREMENT';
    payload: number;
}

type ResetAction = {
    type: 'RESET';
}

type CounterAction = UpdateAction | ResetAction;

const initialState = {
    count: 0,
};

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.payload };
        case 'DECREMENT':
            return { count: state.count - action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count } = state;
    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}
                style={{ marginRight: '10px' }}>
                +
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>
                -
            </button>
            <button onClick={() => dispatch({ type: 'RESET' })}>
                RESET
            </button>
        </div>
    );
};
