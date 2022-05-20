import "./App.css";
import ClassBasedComponent from "./components/ClassBasedComponent";
import ClassCom from "./components/ClassForm";
import ClassList from "./components/ClassList";
import FunctionalBasedComponent from "./components/FunctionalBasedComponent";
import FunctionCom from "./components/functionComponents/FunctionCom";

function App() {
  return (
    <div className="App">
      {/* <ClassBasedComponent /> */}
      {/* <FunctionalBasedComponent /> */}
      {/* <ClassCom /> */}
      {/* <ClassList /> */}
      <FunctionCom />
    </div>
  );
}

export default App;
