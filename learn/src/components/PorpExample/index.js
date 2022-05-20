import React from "react";

const PropExample = (props) => {
  console.log(props);
  const { flag, data, parentComponentHandler } = props;
  return (
    <div>
      {flag && data}
      <button onClick={parentComponentHandler}>click</button>
    </div>
  );
};

export default PropExample;
