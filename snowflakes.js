// Функция для создания снежинок
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // Снежинка символом
    snowflake.style.left = Math.random() * 100 + 'vw'; // Случайное положение по горизонтали
    snowflake.style.fontSize = Math.random() * 10 + 15 + 'px'; // Случайный размер
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Разное время падения

    document.body.appendChild(snowflake);

    // Удаление снежинки после анимации
    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

// Запуск снежинок
setInterval(createSnowflake, 300); // Создание снежинки каждые 300 мс