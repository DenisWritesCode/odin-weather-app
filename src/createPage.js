const pageLayout = (form) => {
  // create 2 divs - form & data
  const container = document.createElement("div");
  const divForm = document.createElement("div");
  const divData = document.createElement("div");

  const p = document.createElement("p");
  p.innerText = "Test";
  divData.appendChild(p);

  container.appendChild(divForm);
  container.appendChild(divData);

  document.body.appendChild(container);
};

export default pageLayout;
