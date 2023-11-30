import Wishlist from "./wishlist";

const carForm = document.getElementById("submitForm");
const makeInput = document.getElementById("makeInput");
const modelInput = document.getElementById("modelInput");
const yearInput = document.getElementById("yearInput");
const makePara = document.getElementById("car-make");
const modelPara = document.getElementById("car-model");
const yearPara = document.getElementById("car-year");
const removeBtn = document.querySelector("#removeBtn");
const wishlistUl = document.querySelector("ul");

const myWishlist = new Wishlist();

function showCarDetails(car) {
  makePara.textContent = car.make;
  modelPara.textContent = car.model;
  yearPara.textContent = car.year;

  removeBtn.removeAttribute("disabled");
  removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
  wishlistUl.innerHTML = "";
  myWishlist.list.forEach((car) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${car.make} ${car.model}`;
    /* const newMake = document.createElement("p");
    const newModel = document.createElement("p");

    newMake.textContent = car.make;
    newModel.textContent = car.model;
 */
    listItem.addEventListener("click", () => showCarDetails(car));

    //listItem.append(newMake, newModel);
    wishlistUl.append(listItem);
  });
}
function addCar(event) {
  event.preventDefault();

  const make = makeInput.value;
  const model = modelInput.value;
  const year = yearInput.value;

  myWishlist.add(make, model, year);
  updateDOMList();
  carForm.reset();
}
function removeCar() {
  const carId = Number(removeBtn.getAttribute("data-carId"));
  myWishlist.remove(carId);

  updateDOMList();

  makePara.textContent = "";
  modelPara.textContent = "";
  yearPara.textContent = "";

  removeBtn.setAttribute("disabled", true);
}

carForm.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);
