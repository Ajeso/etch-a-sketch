const container = document.querySelector(".container");
let gridBox = document.querySelector(".grid-div");
let size = 16;

for (let i = 1; i < size * size; i++) {
  let div = document.createElement("div");
  div.className = "grid-div";
  container.appendChild(div);
}
