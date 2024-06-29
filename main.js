import "./style.css";
import getWeather from "./weather.js";
import * as dom from "./dom.js";

let weather;

dom.submitBtn.addEventListener("click", () => {
  const query = dom.getQuery();
  getWeather(query)
    .then(function (data) {
      dom.updateView(data);
    })
    .catch(function (error) {
      console.error(error.message);
    });
});
