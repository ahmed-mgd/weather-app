import "./style.css";
import getWeather from "./weather.js";
import * as dom from "./dom.js";

let celciusMode = true;

dom.weatherContent.style.display = "none";

dom.submitBtn.addEventListener("click", () => {
  dom.weatherContent.style.display = "block";
  const query = dom.getQuery();
  getWeather(query)
    .then(function (data) {
      dom.updateView(data, celciusMode);
    })
    .catch(function (error) {
      console.error(error.message);
    });
});

dom.farenheitBtn.addEventListener("click", () => {
  dom.celciusBtn.classList.remove("active");
  dom.farenheitBtn.classList.add("active");
  celciusMode = false;
});

dom.celciusBtn.addEventListener("click", () => {
  dom.farenheitBtn.classList.remove("active");
  dom.celciusBtn.classList.add("active");
  celciusMode = true;
});
