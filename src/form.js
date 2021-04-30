const createForm = () => {
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "#");

  // create input element
  const cityInput = document.createElement("input");
  cityInput.setAttribute("type", "input");
  cityInput.setAttribute("name", "citySearch");
  cityInput.setAttribute("placeholder", "Weather for...");
  cityInput.setAttribute("required", "");

  // Submit button
  const btn = document.createElement("button");
  btn.setAttribute("type", "submit");
  btn.innerText = "Fetch Weather";

  form.appendChild(cityInput);
  form.appendChild(btn);

  document.body.appendChild(form);
};

export default createForm;
