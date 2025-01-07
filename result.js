// Заглушка для правильных ответов
const correctAnswers = {
    1: "Python",
    2: "CSS",
    3: "JavaScript"
};

// Получаем ответы пользователя из localStorage
const userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || {};

// Подсчитываем количество правильных ответов
let correctCount = 0;
Object.keys(correctAnswers).forEach(questionId => {
    if (userAnswers[questionId] === correctAnswers[questionId]) {
        correctCount++;
    }
});

// Отображаем результаты на странице
document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    main.innerHTML = `
        <h2>Ваш результат:</h2>
        <p>Правильных ответов: ${correctCount} из ${Object.keys(correctAnswers).length}</p>
        <button onclick="window.location.href='main.html'">Вернуться на главную</button>
    `;
});

