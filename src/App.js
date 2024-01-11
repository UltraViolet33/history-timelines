import "./App.css";
import { Chrono } from "react-chrono";
import items from "./timeline.json";

function App() {
  return (
    <>
      <h1 style={{"textAlign": "center"}}>Les grandes dates de l'Histoire de France</h1>
      <div>
        <Chrono items={items} mediaHeight={300} mode="HORIZONTAL" />
        {/* <Chrono items={items} mediaHeight={300}  /> */}
      </div>
    </>
  );
}

export default App;
