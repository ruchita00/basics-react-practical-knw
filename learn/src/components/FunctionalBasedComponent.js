import React from "react";
import PropExample from "./PorpExample";
import Chilld from "./PorpExample/Chilld";

const Child = () => {
  return <p>child components</p>;
};

function FunctionalBasedComponent() {
  const parentComponentHandler = () => {
    console.log("hello from parent component");
  };

  const getValueFromChildComponent = (value) => {
    console.log(value)
  };
  return (
    <div>
      <Child />
      <PropExample
        parentComponentHandler={parentComponentHandler}
        flag={true}
        data="data as props"
      />
      <Chilld getValueFromChildComponent={getValueFromChildComponent} />
      {/* parentComponentHandler is property and {parentComponentHandler} is method */}
    </div>
  );
}

export default FunctionalBasedComponent;
