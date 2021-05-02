import createForm from "./form.js";
import { fetchImage } from "./api";

const pageLayout = () => {
  // create 2 divs - form & data
  const container = document.createElement("div");
  const divForm = document.createElement("div");
  const divData = document.createElement("div");

  // Add classes to our divs
  container.classList.add("container");
  divForm.classList.add("divForm");
  divData.classList.add("divData");

  // Create Form
  const form = createForm();

  divForm.appendChild(form);
  container.appendChild(divForm);
  container.appendChild(divData);

  document.body.appendChild(container);
};

async function fillPage(data) {
  const divForm = document.querySelector(".divForm");

  const icon = document.createElement("img");
  await fetchImage(data.icon).then((imgUrl) => {
    icon.src = imgUrl;
  });

  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const cityDisplay = document.createElement("p");
  const skyDisplay = document.createElement("p");

  tempDisplay.innerText = `Temps: ${data.temp}`;
  humidityDisplay.innerText = `Humidity: ${data.humidity}`;
  cityDisplay.innerText = `CIty Name: ${data.cityName}`;
  skyDisplay.innerText = `Sky: ${data.sky}`;

  divForm.appendChild(tempDisplay);
  divForm.appendChild(humidityDisplay);
  divForm.appendChild(cityDisplay);
  divForm.appendChild(skyDisplay);
  divForm.appendChild(icon);
}

export default pageLayout;
export { fillPage };
