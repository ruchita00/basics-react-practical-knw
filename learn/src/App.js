import { createContext } from "react";
import "./App.css";
import ClassBasedComponent from "./components/ClassBasedComponent";
import ClassCom from "./components/ClassForm";
import ClassList from "./components/ClassList";
import FunctionalBasedComponent from "./components/FunctionalBasedComponent";
import CompContext from "./components/functionComponents/CompContext";
import CompReducer from "./components/functionComponents/CompReducer";
import CompuseRef from "./components/functionComponents/CompuseRef";
import FunctionCom from "./components/functionComponents/FunctionCom";

export const Context = createContext("light");
console.log(Context);

//context gives us 2 property
// 1.consumer : and
// 2.provider : provider will provide value to your component tree
// example: if you are having multiple components this provider will give that value to all the component or the subcomponent
// and using consumer you can consume that value for particular context

function App() {
  return (
    <Context.Provider value="blue">
      <div className="App">
        {/* <ClassBasedComponent /> */}
        {/* <FunctionalBasedComponent /> */}
        {/* <ClassCom /> */}
        {/* <ClassList /> */}
        {/* <FunctionCom /> */}
        {/* <CompContext /> */}
        {/* <CompReducer /> */}
        <CompuseRef />
      </div>
    </Context.Provider>
  );
}

export default App;
