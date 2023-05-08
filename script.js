let brands = [];

function displayCars() {
  let tableBody = document.querySelector("#carsTable tbody");
  tableBody.innerHTML = "";
  brands.forEach(function(brand) {
    let row = document.createElement("tr");
    let brandCell = document.createElement("td");
    brandCell.textContent = brand;
    row.appendChild(brandCell);
    tableBody.appendChild(row);
  });
}

function addBrand() {
  let input = document.querySelector("#brandInput");
  let brand = input.value.trim();

  if (brand !== "" && brands.length < 10) {
    brands.push(brand);
    input.value = "";
    displayCars();
  } else if (brands.length >= 10) {
    alert("You've reached the limit of 10 brands.");
  }
}

function removeBrand() {
  brands.pop();
  displayCars();
}

function pushBrand() {
  let input = prompt("Enter a new car brand:");
  let brand = input.trim();

  if (brand !== "" && brands.length < 10) {
    brands.push(brand);
    displayCars();
  } else if (brands.length >= 10) {
    alert("You've reached the limit of 10 brands.");
  }
}

function popBrand() {
  brands.pop();
  displayCars();
}

function shiftBrand() {
  brands.shift();
  displayCars();
}

function unshiftBrand() {
  let input = prompt("Enter a new car brand:");
  let brand = input.trim();

  if (brand !== "" && brands.length < 10) {
    brands.unshift(brand);
    displayCars();
  } else if (brands.length >= 10) {
    alert("You've reached the limit of 10 brands.");
  }
}

displayCars();
