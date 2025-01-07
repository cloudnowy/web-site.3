let currentQuestionIndex = 0;
let userAnswers = []; // Сохраняем ответы пользователя
localStorage.setItem('questions', JSON.stringify(questions));

// Функция для загрузки текущего вопроса
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const questionElement = document.querySelector('.question');
    const answersElement = document.querySelector('.answers');

    // Устанавливаем текст вопроса
    questionElement.textContent = question.text;

    // Очищаем предыдущие ответы
    answersElement.innerHTML = '';

    // Добавляем ответы как кнопки
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.className = 'answer-button';
        button.onclick = () => handleAnswer(index); // Привязываем обработчик нажатия
        answersElement.appendChild(button);
    });
}

// Функция для обработки выбранного ответа
function handleAnswer(selectedIndex) {
    // Сохраняем ответ пользователя
    const isCorrect = selectedIndex === questions[currentQuestionIndex].correct;
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        selectedAnswer: selectedIndex,
        isCorrect: isCorrect
    });

    // Проверяем, это последний вопрос или нет
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++; // Увеличиваем индекс текущего вопроса
        loadQuestion(); // Загружаем следующий вопрос
    } else {
        // Если это последний вопрос, сохраняем результаты и переходим на result.html
        localStorage.setItem('testResults', JSON.stringify(userAnswers));
        window.location.href = 'result.html'; // Переход на страницу результатов
    }
}

// Запускаем тест с первого вопроса
loadQuestion();