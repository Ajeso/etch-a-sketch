const container = document.querySelector(".container");
let gridBox = document.querySelector(".grid-div");
let slider = document.getElementById("gridSlider");
let size = slider.value;
function generateGrid(size) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const squareSize = container.clientWidth / size;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.className = "grid-div";
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

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

    container.appendChild(div);
  }
}
generateGrid(size);
slider.addEventListener("input", () => {
  size = slider.value;
  document.getElementById("gridValue").textContent = size;
  generateGrid(size);
});
