const createForm = () => {
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "#");

  // create input element
  const cityInput = document.createElement("input");
  cityInput.setAttribute("type", "input");
  cityInput.setAttribute("name", "citySearch");
  cityInput.id = "citySearch";
  cityInput.setAttribute("placeholder", "Weather for...");
  cityInput.setAttribute("required", "");

  // DropDown for metric
  const units = document.createElement("select");
  units.setAttribute("name", "units");
  units.setAttribute("id", "units");
  // kms, degrees
  const metric = document.createElement("option");
  metric.setAttribute("value", "metric");
  metric.innerText = "Metric";
  // miles, fahrenheit
  const imperial = document.createElement("option");
  imperial.setAttribute("value", "imperial");
  imperial.innerText = "Imperial";

  units.appendChild(metric);
  units.appendChild(imperial);

  // Submit button
  const btn = document.createElement("button");
  btn.setAttribute("type", "submit");
  btn.innerText = "Fetch Weather";

  form.appendChild(cityInput);
  form.appendChild(units);
  form.appendChild(btn);

  return form;
};

export default createForm;
