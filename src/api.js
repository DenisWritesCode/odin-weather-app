async function fetchData(city, units) {
  try {
    const rawData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=66d297d89ec24cd1f0986e90049fb0d6&units=${units}`
    );
    const data = await rawData.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
}

async function fetchImage(imageURL) {
  const image = await fetch(`https://openweathermap.org/img/w/${imageURL}.png`);
  return image.url;
}

// https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=66d297d89ec24cd1f0986e90049fb0d6
// http://openweathermap.org/img/w/04d.png

export { fetchData as default, fetchImage };
