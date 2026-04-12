let counter = document.querySelector(".counter");
let body = document.querySelector("body");
let i = 0;
body.addEventListener("click", () => {
  counter.textContent = ++i;
});
