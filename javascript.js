const sketchpad = document.querySelector(".sketchpad");

// create 16x16 pixel grid
for (let i = 0; i < 16; i++) {
  // create row
  const row = document.createElement("div");
  row.className = "row";
  for (let j = 0; j < 16; j++) {
    // create pixel
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.addEventListener("mouseover", (e) => fillBlack(e));
    row.appendChild(pixel);
  }
  sketchpad.appendChild(row);
}

function fillBlack(event) {
  event.target.style.backgroundColor = "black";
}
