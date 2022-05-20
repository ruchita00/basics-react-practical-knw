import React from "react";

const Chilld = (props) => {
  const { getValueFromChildComponent } = props;

  const handleClick = () => {
    const count = 5;
    getValueFromChildComponent(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Chilld;
