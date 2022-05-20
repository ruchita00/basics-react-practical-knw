import React, { useEffect, useState } from "react";

const FunctionCom = () => {
  const [count, setCount] = useState(0); // initial state
  console.log(count);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("effect is called only once on page load");
  }, []);

  //useEffect is called only once on page load
  //when we add dependency array in useEffect its same as componentdidmount in class component

  //lets see how we can use useEffect as sideEffect as componentdidupdate
  useEffect(() => {
    if (count === 5) {
      setFlag(true);
    }
  }, [count]); //componentdidupdate

  //   this useEffect is working as componentdidUpdate
  // because you just checking previous state and the current state and ... if your checking with current state ===5 then your changing your flag as true and based on that your rendering msg

  // as we have in class component componentWillUnmount to cleanUp all sideEffect
  // when the component will be destroy or unmounted
  //the same thing you can do by useEffect

  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }); //componentWillUnmounted

  //first call componentdidmount,immeditely it is unmount
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      Counter value is :{count}
      {flag && <p>Hello useEffect</p>}
    </div>
  );
};

export default FunctionCom;

//useState => used to update or manage any kind of state
//useEffect=>  it handle any kind of sideeffect  in class based component 1.componentdidmount 2.componentdidupdate 3.componentwillunmount

// on every render useEffet is called
//useContext =>this is basically manage global level state
//useReducer
//useref
