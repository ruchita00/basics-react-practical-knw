import React, { useState, createContext, useEffect } from "react";

export const GlobalContext = createContext({
  searchParam: "",
  handleOnChange: () => {},
  handleSubmit: () => {},
  movieList: [],
  loading: false,
});

const GlobaleState = ({ children }) => {
  //we have to pass value
  const [searchParam, setSearchParam] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  //extract data from localstorage
  useEffect(() => {
    const getDataFromStorage = JSON.parse(localStorage.getItem("movieList"));
    if (getDataFromStorage && getDataFromStorage.length > 0)
      setMovieList(getDataFromStorage);
  }, []);

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setSearchParam(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchParam}&apikey=13f31283`
    );
    const data = await response.json();
    console.log(data);
    if (data) {
      setMovieList(data.Search);
      localStorage.setItem("movieList", JSON.stringify(data.Search)); //store data into local storage
      setLoading(false);
      setSearchParam("");
    }
  };
  const contextValue = {
    searchParam,
    handleOnChange,
    handleSubmit,
    movieList,
    loading,
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobaleState;
