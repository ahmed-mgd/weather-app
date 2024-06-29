function setLocation(city, region, country) {
  location.textContent = `${city}, ${region} | ${country}`;
}

function setWeatherDetails(data, celciusMode) {
  const temp = celciusMode ? `${data.temp_c}\u00B0C` : `${data.temp_c}\u00B0F`;
  const feel = celciusMode ? data.feelslike_c + "\u00B0C" : data.feelslike_f + "\u00B0F";
  currentTemp.textContent = temp;
  currentFeel.textContent = "Feels like: " + feel;
  currentCondition.textContent = data.condition;
  currentCIcon.src = data.condition_icon;
}

export function updateView(data) {
  setLocation(data.city, data.region, data.country);
  setWeatherDetails(data, true);
}

export function getQuery() {
  return queryField.value;
}

export const submitBtn = document.querySelector("#submit-button");
export const weatherContent = document.querySelector("#weather");

const queryField = document.querySelector("#query");
const location = document.querySelector("#location");

const currentTemp = document.querySelector("#temp");
const currentFeel = document.querySelector("#feel");
const currentCondition = document.querySelector("#condition");
const currentCIcon = document.querySelector("#c-icon");
