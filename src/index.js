import fetchData, { fetchImage } from "./api";
import cleanedData from "./handleJSON";
import createForm from "./form";

createForm();

const icon = document.createElement("img");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = document.querySelector("#citySearch");
  fetchData(city.value, "metric").then((rawData) => {
    const data = cleanedData(rawData);
    console.log({ data });
    fetchImage(data.icon).then((imgURL) => {
      icon.src = imgURL;
    });

    city.value = "";
  });
});

// Metric for km & celsius
// const response = fetchData("nairobi", "metric").then((rawData) => {
//   const data = cleanedData(rawData);
//   console.table(data);
//   fetchImage(data.icon).then((imgURL) => {
//     icon.src = imgURL;
//   });
// });

document.body.appendChild(icon);
