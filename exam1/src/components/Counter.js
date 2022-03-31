import React, { /*useState,*/ useReducer } from "react";

/* useReducer 사용 */
const reducer = (state, action) => {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  const Increase = () => {
    dispatch({ type: "INCREMENT" });
  };

  const Decrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <>
      <p>{state.value}</p>
      <button onClick={Increase}> + </button>
      <button onClick={Decrease}> - </button>
    </>
  );
};
export default Counter;

/*
useState 사용
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const Increase = () => {
    setCounter(counter + 1);
  };

  const Decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <p>{counter}</p>
      <button onClick={Increase}>+</button>
      <button onClick={Decrease}>-</button>
    </>
  );
};

export default Counter;
*/
