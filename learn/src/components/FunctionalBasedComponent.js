import React from "react";
import PropExample from "./PorpExample";

const Child = () => {
  return <p>child components</p>;
};

function FunctionalBasedComponent() {
  const parentComponentHandler = () => {
    console.log("hello from parent component");
  };
  return (
    <div>
      <Child />
      <PropExample
        parentComponentHandler={parentComponentHandler}
        flag={true}
        data="data as props"
      />
      {/* parentComponentHandler is property and {parentComponentHandler} is method */}
    </div>
  );
}

export default FunctionalBasedComponent;
