// Получаем результаты и вопросы из localStorage
const results = JSON.parse(localStorage.getItem('testResults')) || [];
const questions = JSON.parse(localStorage.getItem('questions')) || [];

const resultsContainer = document.querySelector('.results');
// Проверяем, есть ли данные
if (results.length > 0 && questions.length > 0) {
    resultsContainer.innerHTML = ''; // Очищаем сообщение "Загрузка результатов..."

    results.forEach((result, index) => {
        const question = questions[result.questionIndex];
        const isCorrect = result.isCorrect ? 'Правильно' : 'Неправильно';

        const resultElement = document.createElement('div');
        resultElement.innerHTML = `
            <p><strong>Вопрос ${index + 1}:</strong> ${question.text}</p>
            <p><strong>Ваш ответ:</strong> ${question.answers[result.selectedAnswer]}</p>
            <p><strong>Результат:</strong> ${isCorrect}</p>
        `;
        resultsContainer.appendChild(resultElement);
    });
} else {
    resultsContainer.textContent = 'Результаты отсутствуют.';
}
