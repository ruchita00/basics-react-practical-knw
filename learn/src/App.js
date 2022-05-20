import "./App.css";
import ClassBasedComponent from "./components/ClassBasedComponent";
import ClassCom from "./components/ClassForm";
import ClassList from "./components/ClassList";
import FunctionalBasedComponent from "./components/FunctionalBasedComponent";

function App() {
  return (
    <div className="App">
      {/* <ClassBasedComponent /> */}
      {/* <FunctionalBasedComponent /> */}
      {/* <ClassCom /> */}
      <ClassList />
    </div>
  );
}

export default App;
