async function fetchData(query) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=05e5e7a67d664fe6bcf202205242806&q=${query}`
    );
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

function getWeather(query) {
  fetchData(query).then(function(data) {
    return {
      city: data.location.name,
      country: data.location.country,
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      feelslike_c: data.current.feelslike_c,
      feelslike_f: data.current.feelslike_f,
      condition: data.current.condition.text,
      condition_icon: data.current.condition.icon,
      wind_mph: data.current.wind_mph,
      wind_kph: data.current.wind_kph,
    };
  })
}

export default getWeather;
