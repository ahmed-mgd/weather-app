async function getWeather(query) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=05e5e7a67d664fe6bcf202205242806&q=${query}`
    );
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const rawData = await response.json();
    return {
      city: rawData.location.name,
      region: rawData.location.region,
      country: rawData.location.country,
      temp_c: rawData.current.temp_c,
      temp_f: rawData.current.temp_f,
      feelslike_c: rawData.current.feelslike_c,
      feelslike_f: rawData.current.feelslike_f,
      condition: rawData.current.condition.text,
      condition_icon: rawData.current.condition.icon,
      wind_mph: rawData.current.wind_mph,
      wind_kph: rawData.current.wind_kph,
    };
  } catch (error) {
    console.error(error.message);
  }
}

export default getWeather;
