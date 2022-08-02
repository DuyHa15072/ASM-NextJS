import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, increaseByAmount } from "./counter.slice";

type Props = {};

const Counter = (props: Props) => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.value);
    console.log(counter);
    return (
        <div>
            Counter {counter}
            <button onClick={() => dispatch(increase())}>Click</button>
            <button onClick={() => dispatch(increaseByAmount(10))}>Click</button>
        </div>
    );
};

export default Counter;
