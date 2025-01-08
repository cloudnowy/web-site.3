// Загружаем список тестов из localStorage
const tests = JSON.parse(localStorage.getItem('tests')) || [];

// Отображение тестов на главной странице
function renderTests() {
    const testList = document.getElementById('test-list');
    testList.innerHTML = '';

    tests.forEach((test, index) => {
        const li = document.createElement('li');
        li.textContent = test.name;

        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить';
        editButton.onclick = () => editTest(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = () => deleteTest(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        testList.appendChild(li);
    });
}

// Создание нового теста
function createTest() {
    const testName = document.getElementById('test-name').value.trim();
    if (testName === '') {
        alert('Введите название теста!');
        return;
    }

    const newTest = { name: testName, questions: [] };
    tests.push(newTest);
    localStorage.setItem('tests', JSON.stringify(tests));
    renderTests();

    // Перенаправление на страницу управления тестом
    window.location.href = `test-management.html?index=${tests.length - 1}`;
}

// Редактирование существующего теста
function editTest(index) {
    window.location.href = `test-management.html?index=${index}`;
}

// Удаление теста
function deleteTest(index) {
    if (confirm('Вы уверены, что хотите удалить этот тест?')) {
        tests.splice(index, 1);
        localStorage.setItem('tests', JSON.stringify(tests));
        renderTests();
    }
}

// Инициализация списка тестов
renderTests();
