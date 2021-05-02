import fetchData from "./api";
import cleanedData from "./handleJSON";
import pageLayout, { fillPage } from "./createPage";

function conductFetch(city, units = "metric") {
  fetchData(city, units).then((rawData) => {
    const data = cleanedData(rawData);
    fillPage(data);
  });
}

// Quick page initialisation
pageLayout();
conductFetch("Johannesburg");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = document.querySelector("#citySearch");
  const units = document.querySelector("#units");

  conductFetch(city.value, units.value);

  city.value = "";
});
