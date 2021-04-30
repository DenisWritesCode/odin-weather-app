import fetchData, { fetchImage } from "./api";
import cleanedData from "./handleJSON";
import createForm from "./form";

createForm();

const icon = document.createElement("img");

// Metric for km & celsius
// const response = fetchData("nairobi", "metric").then((rawData) => {
//   const data = cleanedData(rawData);
//   console.table(data);
//   fetchImage(data.icon).then((imgURL) => {
//     icon.src = imgURL;
//   });
// });

document.body.appendChild(icon);
