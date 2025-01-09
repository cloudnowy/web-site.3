// Список тестов будет храниться в localStorage
const tests = JSON.parse(localStorage.getItem('tests')) || [];

// Функция для отображения списка тестов
function renderTests() {
    const testListElement = document.getElementById('test-list');
    testListElement.innerHTML = '';

    tests.forEach((test, index) => {
        const li = document.createElement('li');
        li.textContent = test.name;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.style.marginLeft = '10px';
        deleteButton.onclick = () => deleteTest(index);

        li.appendChild(deleteButton);
        testListElement.appendChild(li);
    });
}

// Функция для создания нового теста
function createTest() {
    const testName = document.getElementById('test-name').value.trim();

    if (testName === '') {
        alert('Название теста не может быть пустым!');
        return;
    }

    const newTest = {
        name: testName,
        questions: [] // Пустой массив вопросов
    };

    tests.push(newTest);
    localStorage.setItem('tests', JSON.stringify(tests));
    renderTests();

    // Очистка поля ввода
    document.getElementById('test-name').value = '';
}

// Функция для удаления теста
function deleteTest(index) {
    if (confirm('Вы уверены, что хотите удалить этот тест?')) {
        tests.splice(index, 1);
        localStorage.setItem('tests', JSON.stringify(tests));
        renderTests();
    }
}

// Первоначальная загрузка списка тестов
renderTests();

let currentTestIndex = null;

// Отобразить вопросы для выбранного теста
function manageQuestions(index) {
    currentTestIndex = index;
    const currentTest = tests[index];

    document.getElementById('current-test-name').textContent = currentTest.name;
    document.querySelector('.manage-questions').style.display = 'block';
    renderQuestions();
}

// Отобразить список вопросов
function renderQuestions() {
    const questionListElement = document.getElementById('question-list');
    questionListElement.innerHTML = '';

    const currentTest = tests[currentTestIndex];

    currentTest.questions.forEach((question, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Вопрос ${index + 1}:</strong> ${question.text}<br>
            <em>Ответы:</em> ${question.answers.join(', ')}<br>
            <em>Правильный ответ:</em> ${question.answers[question.correct]}
        `;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.style.marginLeft = '10px';
        deleteButton.onclick = () => deleteQuestion(index);

        li.appendChild(deleteButton);
        questionListElement.appendChild(li);
    });
}

// Добавить новый вопрос
function addQuestion() {
    const questionText = document.getElementById('question-text').value.trim();
    const questionAnswers = document.getElementById('question-answers').value.trim().split(',');
    const correctAnswer = parseInt(document.getElementById('correct-answer').value, 10);

    if (questionText === '' || questionAnswers.length === 0 || isNaN(correctAnswer)) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    const newQuestion = {
        text: questionText,
        answers: questionAnswers,
        correct: correctAnswer
    };

    tests[currentTestIndex].questions.push(newQuestion);
    localStorage.setItem('tests', JSON.stringify(tests));
    renderQuestions();

    // Очистка полей ввода
    document.getElementById('question-text').value = '';
    document.getElementById('question-answers').value = '';
    document.getElementById('correct-answer').value = '';
}

// Удалить вопрос
function deleteQuestion(index) {
    const currentTest = tests[currentTestIndex];
    currentTest.questions.splice(index, 1);
    localStorage.setItem('tests', JSON.stringify(tests));
    renderQuestions();
}
