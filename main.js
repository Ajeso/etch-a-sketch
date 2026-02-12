const container = document.querySelector(".container");
let gridBox = document.querySelector(".grid-div");
let size = 16;

for (let i = 1; i < size * size; i++) {
  let div = document.createElement("div");
  div.className = "grid-div";
  container.appendChild(div);

  div.addEventListener("mouseover", () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    div.style.backgroundColor = color;
  });
}
