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
});
