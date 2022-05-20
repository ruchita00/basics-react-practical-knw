import React, { createRef, useEffect } from "react";

//ref and useRef is basically used to handle any kind of
//dom operations, elememts in component and uncontroll form

const CompuseRef = () => {
  const inputRef = createRef(null);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} name="name" placeholder="Name" type="text" />
    </div>
  );
};

export default CompuseRef;
