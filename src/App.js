import "./App.css";
import { Chrono } from "react-chrono";
import items from "./timeline.json";

function App() {
  return (
    <div>
      <Chrono enableDarkToggle={true} slideShow={true} items={items} mode="VERTICAL_ALTERNATING" />
    </div>
  );
}

export default App;
