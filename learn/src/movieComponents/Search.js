import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Search = () => {
  const { searchParam, handleOnChange, handleSubmit } =
    useContext(GlobalContext);
  return (
    <div className="search">
      <input
        name="search"
        placeholder="Enter movie keyword here"
        value={searchParam}
        onChange={handleOnChange}
      />
      <button disabled={searchParam.trim().length <= 2} onClick={handleSubmit}>
        Submit search
      </button>
    </div>
  );
};

export default Search;
