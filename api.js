// api.js - Module for working with API
const API_BASE = 'https://testback-production-a036.up.railway.app';

function createTest() {
    const title = document.getElementById('test-title').value;
    const disciplineId = document.getElementById('discipline-id').value;

    fetch(`${API_BASE}/tests`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, discipline_id: disciplineId })
    })
        .then(response => {
            if (response.ok) {
                alert('Test created successfully');
            } else {
                alert('Failed to create test');
            }
        })
        .catch(error => console.error('Error:', error));
}

function createDiscipline() {
    const title = document.getElementById('discipline-title').value;
    const description = document.getElementById('discipline-description').value;

    fetch(`${API_BASE}/disciplines`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description })
    })
        .then(response => {
            if (response.ok) {
                alert('Discipline created successfully');
            } else {
                alert('Failed to create discipline');
            }
        })
        .catch(error => console.error('Error:', error));
}

function deleteTest() {
    const testId = document.getElementById('delete-test-id').value;

    fetch(`${API_BASE}/tests/${testId}`, { method: 'DELETE' })
        .then(response => response.ok ? alert('Тест удалён') : alert('Ошибка удаления теста'))
        .catch(console.error);
}

function deleteDiscipline() {
    const disciplineId = document.getElementById('delete-discipline-id').value;

    fetch(`${API_BASE}/disciplines/${disciplineId}`, { method: 'DELETE' })
        .then(response => response.ok ? alert('Дисциплина удалена') : alert('Ошибка удаления дисциплины'))
        .catch(console.error);
}

function fetchDisciplines() {
    fetch(`${API_BASE}/disciplines`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch disciplines');
            }
            return response.json();
        })
        .then(data => {
            const list = document.getElementById('discipline-list');
            list.innerHTML = '';

            if (Array.isArray(data.disciplines)) {
                data.disciplines.forEach(discipline => {
                    const li = document.createElement('li');
                    li.textContent = `${discipline.id}: ${discipline.title} - ${discipline.description}`;
                    list.appendChild(li);
                });
            } else {
                console.error('Unexpected data structure:', data);
            }
        })
        .catch(error => console.error('Error:', error));
}

function fetchTests() {
    const disciplineId = document.getElementById('view-tests-discipline-id').value;

    fetch(`${API_BASE}/tests/${disciplineId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch tests');
            }
            return response.json();
        })
        .then(data => {
            const list = document.getElementById('test-list');
            list.innerHTML = '';

            if (Array.isArray(data.tests)) {
                data.tests.forEach(test => {
                    const li = document.createElement('li');
                    li.textContent = `${test.id}: ${test.title}`;
                    list.appendChild(li);
                });
            } else {
                console.error('Unexpected data structure:', data);
            }
        })
        .catch(error => console.error('Error:', error));
}

function fetchQuestions() {
    const testId = document.getElementById('test-id-questions').value;

    fetch(`${API_BASE}/questions/${testId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch questions');
            }
            return response.json();
        })
        .then(data => {
            const list = document.getElementById('question-list');
            list.innerHTML = '';

            if (Array.isArray(data.questions)) {
                data.questions.forEach(question => {
                    const li = document.createElement('li');
                    li.textContent = `${question.content}`;
                    list.appendChild(li);
                });
            } else {
                console.error('Unexpected data structure:', data);
            }
        })
        .catch(error => console.error('Error:', error));
}

function createQuestion() {
    const testId = document.getElementById('question-test-id').value;
    const content = document.getElementById('question-content').value;

    fetch(`${API_BASE}/questions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ test_id: testId, content })
    })
        .then(response => {
            if (response.ok) {
                alert('Question created successfully');
            } else {
                alert('Failed to create question');
            }
        })
        .catch(error => console.error('Error:', error));
}

export {
    fetchDisciplines,
    createDiscipline,
    fetchTests,
    createTest,
    fetchQuestions,
    createQuestion
};
