import React, { useState } from "react";

const FunctionCom = () => {
  const [count, setCount] = useState(0); // initial state
  console.log(count);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      Counter value is :{count}
    </div>
  );
};

export default FunctionCom;

//useState => used to update or manage any kind of state
//useEffect=>  it handle any kind of sideeffect  in class based component 1.componentdidmount 2.componentdidupdate 3.componentwillunmount
//useContext =>this is basically manage global level state
//useReducer
//useref
