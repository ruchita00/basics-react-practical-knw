import React, { useReducer } from "react";

const CompReducer = () => {
  // useReducer is used to manage complex state in an application
  //toggle functionality

  //useReducer is usually preferable to useState when you
  // have complex state logic that involves multiple sub-values.
  //it also lets you optimize performance for componenents that trigger deep updates because you can pass dispatch down instead of callbacks.

  const initialState = {
    flag: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_BUTTON":
        console.log(state, action);
        return {
          ...state,
          flag: !state.flag,
        };
      default:
        return state;
    }
  };

  //dispatch method will disptach your action to reducer
  //it will come to reducer()check inside swtich what kind of
  //type we are passing for particluar type base on that
  //perform some action

  //its alternative pf useEffect

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      <button onClick={() => dispatch({ type: "TOGGLE_BUTTON" })}>
        Toggle
      </button>
    </div>
  );
};

export default CompReducer;
