function spawnEyes(count = 100) {
  const container = document.getElementById("eyes-container");
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  for (let i = 0; i < count; i++) {
    const eye = document.createElement("div");
    eye.className = "eye";
    eye.style.top = Math.random() * vh + "px";
    eye.style.left = Math.random() * vw + "px";
    container.appendChild(eye);
  }
}

window.onload = () => spawnEyes();
