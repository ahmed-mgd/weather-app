function setLocation(city, region, country) {
  location.textContent = `${city}, ${region} | ${country}`;
}

export function updateView(data) {
    setLocation(data.city, data.region, data.country);
}

export function getQuery() {
  return queryField.value;
}

export const submitBtn = document.querySelector("#submit-button");

const queryField = document.querySelector("#query");
const location = document.querySelector("#location");

submitBtn.addEventListener("click", () => {
  const query = getQuery();
});
