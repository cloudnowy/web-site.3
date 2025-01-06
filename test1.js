// Фейковые данные для теста
const questions = [
    {
        question: "Какой язык программирования вы предпочитаете?",
        answers: ["Python", "JavaScript", "Java", "C++"]
    },
    {
        question: "Какую операционную систему вы используете?",
        answers: ["Windows", "Linux", "MacOS", "Другое"]
    },
    {
        question: "Какая ваша любимая технология фронтенда?",
        answers: ["React", "Vue", "Angular", "Svelte"]
    }
];

let currentQuestionIndex = 0;
const userAnswers = [];

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");

    // Загружаем текущий вопрос
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Очищаем предыдущие ответы
    answersElement.innerHTML = "";

    // Генерируем ответы
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => {
            userAnswers[currentQuestionIndex] = index; // Сохраняем выбранный ответ
            nextQuestion(); // Переход к следующему вопросу
        };
        answersElement.appendChild(button);
    });
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion(); // Загрузка следующего вопроса
    } else {
        // Перенаправляем на страницу результатов
        localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
        window.location.href = "results.html";
    }
}

// Загружаем первый вопрос при открытии страницы
window.onload = loadQuestion;

