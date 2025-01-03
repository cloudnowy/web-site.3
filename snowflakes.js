// Функция для создания снежинок с движением по диагонали
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // Снежинка символом

    // Случайное положение по горизонтали (от 0% до 100% ширины экрана)
    const randomX = Math.random() * 100 + 'vw';
    
    // Случайный размер
    const size = Math.random() * 10 + 15 + 'px';
    
    // Случайная продолжительность анимации (от 10 до 20 секунд)
    const duration = Math.random() * 10 + 10 + 's';

    // Применяем стили снежинки
    snowflake.style.left = randomX; // Начальная позиция по горизонтали
    snowflake.style.fontSize = size; // Размер снежинки
    snowflake.style.animationDuration = duration; // Разное время падения для каждой снежинки

    document.body.appendChild(snowflake);

    // Удаление снежинки после анимации
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(duration) * 1000); // Удаляем снежинку по завершении анимации
}

// Функция для создания вертикальных снежинок
function createVerticalSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake-vertical');
    snowflake.textContent = '❄'; // Снежинка символом

    // Случайное положение по горизонтали (от 0% до 100% ширины экрана)
    const randomX = Math.random() * 100 + 'vw';
    
    // Случайный размер
    const size = Math.random() * 10 + 15 + 'px';
    
    // Случайная продолжительность анимации (от 5 до 15 секунд)
    const duration = Math.random() * 10 + 5 + 's';

    // Применяем стили вертикальной снежинки
    snowflake.style.left = randomX; // Начальная позиция по горизонтали
    snowflake.style.fontSize = size; // Размер снежинки
    snowflake.style.animationDuration = duration; // Разное время падения для каждой снежинки

    document.body.appendChild(snowflake);

    // Удаление снежинки после анимации
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(duration) * 1000); // Удаляем снежинку по завершении анимации
}

// Запуск снежинок с диагональным падением
setInterval(createSnowflake, 400); // Создание снежинки каждые 400 мс

// Запуск вертикальных снежинок
setInterval(createVerticalSnowflake, 400); // Создание вертикальной снежинки каждые 400 мс