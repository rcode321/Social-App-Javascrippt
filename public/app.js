let registerBtn = document.querySelector("#RegisterBtn");
let modal = document.querySelector("#modal1");
modal.style.display = "none";

let closeBtn = document.querySelector(".close");
let overlay = document.querySelector("#overlay");
overlay.style.display = "none";

registerBtn.addEventListener("click", (e) => {
  modal.style.display = "block";
  overlay.style.display = "block";
  modal.classList.remove("hideModal");
  e.preventDefault();
});

closeBtn.addEventListener("click", (e) => {
  modal.classList.add("hideModal");
  overlay.style.display = "none";
  e.preventDefault();
});
