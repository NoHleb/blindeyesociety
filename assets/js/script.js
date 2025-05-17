document.addEventListener("DOMContentLoaded", () => {
    const eyesContainer = document.querySelector(".eyes-container");

    function createEye() {
        const eye = document.createElement("img");
        eye.src = "assets/images/eyes.gif";
        eye.classList.add("eye");

        // Ограничиваем случайное положение только в зоне рамки
        const borderSize = 20;
        const randomX = borderSize + Math.random() * (window.innerWidth - 2 * borderSize - 60);
        const randomY = borderSize + Math.random() * (window.innerHeight - 2 * borderSize - 60);

        eye.style.position = "absolute";
        eye.style.left = `${randomX}px`;
        eye.style.top = `${randomY}px`;

        eyesContainer.appendChild(eye);
    }

    // Создаём 8 случайных глаз на рамке
    for (let i = 0; i < 8; i++) {
        createEye();
    }
const targetDate = new Date("2025-06-01T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Время вышло.";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `Осталось: ${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
});
