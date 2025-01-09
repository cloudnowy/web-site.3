// Функция для удаления теста
function deleteTest(index) {
    if (confirm('Вы уверены, что хотите удалить этот тест?')) {
        tests.splice(index, 1);
        localStorage.setItem('tests', JSON.stringify(tests));
        renderTests();
    }
}
