import "./style.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <h2> </h2>
      <Weather city="Paris" />
    </div>
  );
}
