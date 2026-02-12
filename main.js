const container = document.querySelector(".container");
let gridBox = document.querySelector(".grid-div");
let size = 16;

for (let i = 1; i < size * size; i++) {
  let div = document.createElement("div");
  div.className = "grid-div";
  container.appendChild(div);

  div.addEventListener("mouseover", () => {
    if (!div.baseColor) {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      div.baseColor = { r, g, b };
      div.darknessLevel = 0;
    }

    if (div.darknessLevel < 10) {
      let r = div.baseColor.r;
      let g = div.baseColor.g;
      let b = div.baseColor.b;

      let newR = Math.floor(r * (1 - 0.1 * div.darknessLevel));
      let newG = Math.floor(g * (1 - 0.1 * div.darknessLevel));
      let newB = Math.floor(b * (1 - 0.1 * div.darknessLevel));

      div.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
      div.darknessLevel++;
    }
  });
}
