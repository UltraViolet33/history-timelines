import { useState } from "react";
import { Chrono } from "react-chrono";
import timelines from "./timeline.json";
import "./App.css";

function App() {
  const [timeline, setTimeline] = useState(timelines[0]);

  const handleChangeTimeline = (event) => {
    const index = event.target.value;
    setTimeline({
      ...timeline,
      events: timelines[index].events,
      title: timelines[index].title,
    });
  };

  return (
    <>
      <div className="header">
        <h1 style={{ textAlign: "center" }}>{timeline.title}</h1>
        <select onChange={handleChangeTimeline}>
          {timelines.map((timeline, index) => (
            <option key={index} value={index}>
              {timeline.title}
            </option>
          ))}
        </select>
      </div>
      <div key={timeline.title}>
        <Chrono items={timeline.events} mediaHeight={300} mode="HORIZONTAL" />
      </div>
    </>
  );
}

export default App;
