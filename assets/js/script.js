document.addEventListener("DOMContentLoaded", () => {
    const eyesContainer = document.querySelector(".eyes-container");

    function createEye() {
        const eye = document.createElement("img");
        eye.src = "assets/images/eyes.gif";
        eye.classList.add("eye");

        // Случайное положение
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;

        eye.style.left = `${randomX}px`;
        eye.style.top = `${randomY}px`;

        eyesContainer.appendChild(eye);
    }

    // Создаём несколько глаз
    for (let i = 0; i < 10; i++) {
        createEye();
    }
});
