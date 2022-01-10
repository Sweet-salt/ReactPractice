import { useReducer } from "react";

const reducer = (state, action) => {
    if(action.type === 'plus'){
        return {
            count: state.count + 1,
        };
    }
    return state;
};

export default function Example() {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <div>
            <p>You clicked {state.count} times</p>
            <button onClick={click}>click</button>
        </div>
    );

    function click () {
        dispatch({type: 'plus'});
    }
}