function fillBlack(event) {
  event.target.style.backgroundColor = "black";
}

function generateSketchpad(size) {
  if (size > 100) { size = 100; }

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < size; j++) {
      const pixel = document.createElement("div");
      pixel.className = "pixel";
      pixel.addEventListener("mouseover", (e) => fillBlack(e));
      row.appendChild(pixel);
    }
    sketchpad.appendChild(row);
  }
}

function resize() {
  const input = window.prompt("Enter size: ");
  const size = Number(input);

  // wipe current sketchpad
  while (sketchpad.firstChild) {
    sketchpad.removeChild(sketchpad.firstChild);
  }

  generateSketchpad(size);
}

const sketchpad = document.querySelector(".sketchpad");

const button = document.querySelector("button");
button.addEventListener("click", () => resize());

// generate initial 16x16 sketchpad
generateSketchpad(16);
