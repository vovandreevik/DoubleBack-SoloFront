document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('hello');
    var message = element.getAttribute('data-message');
    element.innerHTML = message;
});


let div = document.createElement('div'); // Создаем div
div.innerHTML = '<h1>Привет, мир!</h1>'; // Вставляем текст в div
document.body.appendChild(div); // Добавляем div на страницу