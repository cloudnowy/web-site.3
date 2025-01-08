// Получаем индекс теста из параметров URL
const urlParams = new URLSearchParams(window.location.search);
const testIndex = parseInt(urlParams.get('index'), 10);
const tests = JSON.parse(localStorage.getItem('tests')) || [];
const currentTest = tests[testIndex];

// Устанавливаем заголовок страницы
document.getElementById('test-title').textContent = `Тест: ${currentTest.name}`;

// Отображение вопросов
function renderQuestions() {
    const questionList = document.getElementById('question-list');
    questionList.innerHTML = '';

    currentTest.questions.forEach((question, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Вопрос ${index + 1}:</strong> ${question.text}<br>
            <em>Ответы:</em> ${question.answers.join(', ')}<br>
            <em>Правильный ответ:</em> ${question.answers[question.correct]}
        `;

        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить';
        editButton.onclick = () => editQuestion(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = () => deleteQuestion(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        questionList.appendChild(li);
    });
}

// Добавление вопроса
function addQuestion() {
    const questionText = document.getElementById('question-text').value.trim();
    const questionAnswers = document.getElementById('question-answers').value.trim().split(',');
    const correctAnswer = parseInt(document.getElementById('correct-answer').value, 10);

    if (!questionText || questionAnswers.length === 0 || isNaN(correctAnswer)) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    const newQuestion = {
        text: questionText,
        answers: questionAnswers,
        correct: correctAnswer,
    };

    currentTest.questions.push(newQuestion);
    saveTest();
    renderQuestions();

    // Очистка полей ввода
    document.getElementById('question-text').value = '';
    document.getElementById('question-answers').value = '';
    document.getElementById('correct-answer').value = '';
}

// Удаление вопроса
function deleteQuestion(index) {
    currentTest.questions.splice(index, 1);
    saveTest();
    renderQuestions();
}

// Сохранение изменений в localStorage
function saveTest() {
    tests[testIndex] = currentTest;
    localStorage.setItem('tests', JSON.stringify(tests));
}

// Инициализация списка вопросов
renderQuestions();
