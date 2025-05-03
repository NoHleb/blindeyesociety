document.addEventListener("DOMContentLoaded", () => {
    const eyesContainer = document.querySelector(".eyes-container");

    function createEye() {
        const eye = document.createElement("img");
        eye.src = "assets/images/eyes.gif";
        eye.classList.add("eye");

        // Генерируем случайную позицию ОДИН раз
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);

        // Фиксируем позицию
        eye.style.position = "absolute";
        eye.style.left = `${randomX}px`;
        eye.style.top = `${randomY}px`;

        eyesContainer.appendChild(eye);
    }

    // Создаём 10 случайных глаз и фиксируем их
    for (let i = 0; i < 10; i++) {
        createEye();
    }
});
