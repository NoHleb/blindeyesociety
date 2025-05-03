document.addEventListener("DOMContentLoaded", () => {
    const eyesContainer = document.querySelector(".eyes-container");

    function createEye() {
        const eye = document.createElement("img");
        eye.src = "assets/images/eyes.gif";
        eye.classList.add("eye");

        // Генерируем случайную позицию ОДИН раз при создании
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);

        // Фиксируем позицию, запрещаем перемещение
        eye.style.position = "absolute";
        eye.style.left = `${randomX}px`;
        eye.style.top = `${randomY}px`;

        // Добавляем глаз в контейнер
        eyesContainer.appendChild(eye);
    }

    // Создаём 10 случайных глаз ОДИН раз при загрузке страницы
    for (let i = 0; i < 10; i++) {
        createEye();
    }
});
