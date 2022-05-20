import React, { useContext } from "react";
import { Context } from "../../App";

const CompContext = () => {
  const getValueFromContext = useContext(Context);
  console.log(getValueFromContext);
  return (
    <div>
      <button style={{ backgroundColor: getValueFromContext }}>Click</button>
    </div>
  );
};

export default CompContext;

//how basically manage global state using context
