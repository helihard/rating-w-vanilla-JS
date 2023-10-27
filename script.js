let rating = document.querySelectorAll(".rating");
let submit = document.getElementById("submit");
let ratingState = document.getElementById("rating-state");
let thankYouState = document.getElementById("thank-you-state");
let selected = document.getElementById("selected");

let myRate = 0;

rating.forEach((rate, index1) => {
  
  rate.addEventListener("click", () => {
    myRate = index1 + 1;
    rate.classList.add("active");

    rating.forEach((rate, index2) => {
      if (index1 != index2) {
        rate.classList.remove("active");
      }
    });
    submit.addEventListener("click", () => {
      submit.classList.add("active");
      ratingState.style.display = "none";
      thankYouState.style.display = "flex";
      selected.innerText = ("You selected " + myRate + " out of 5");
    });
  })
});