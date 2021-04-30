// Receive first data. Return data + img
const usefulData = (rawData) => {
  return {
    temp: rawData.main.temp,
    humidity: rawData.main.humidity,
    cityName: rawData.name,
    icon: rawData.weather[0].icon,
    sky: rawData.weather[0].description,
  };

  // img.weather[0].icon
};

export default usefulData;
