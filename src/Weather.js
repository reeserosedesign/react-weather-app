import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Weather({ city }) {
  function handleResponse(response) {
    let h2 = document.querySelector("h2");
    h2.innerHTML = `The weather in ${response.data.name} is 
        ${Math.round(response.data.main.temp)}°C.`;
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
  axios.get(url).then(handleResponse);
  return <ClipLoader color="blue" />;
}
