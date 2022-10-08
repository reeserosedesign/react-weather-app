import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Search from "./Search";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <CurrentWeather />
      <Forecast />
      <Search />
      <Footer />
    </div>
  );
}
