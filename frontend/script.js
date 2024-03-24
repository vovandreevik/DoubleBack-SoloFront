var buttonElement = document.createElement("button");
buttonElement.setAttribute("id", "backendButton");
buttonElement.className = "Button";
buttonElement.textContent = "Бэкенд 1";

// Добавление кнопки в DOM
document.body.appendChild(buttonElement);

// Функция для сохранения состояния кнопки в localStorage
function saveButtonState(port) {
    localStorage.setItem('currentBackendPort', port);
}

// Функция для загрузки состояния кнопки из localStorage
function loadButtonState() {
    var savedPort = localStorage.getItem('currentBackendPort');
    return savedPort ? parseInt(savedPort, 10) : 5001; // По умолчанию 5001
}

// Загружаем сохраненное состояние кнопки
var currentBackendPort = loadButtonState();

// Функция, которая будет вызываться при нажатии на кнопку
function buttonClickHandler() {
    // Переключаем порт
    currentBackendPort = currentBackendPort === 5001 ? 5002 : 5001;
    // Обновляем текст кнопки
    buttonElement.textContent = currentBackendPort === 5001 ? "Бэкенд 1" : "Бэкенд 2";

    // Сохраняем состояние кнопки
    saveButtonState(currentBackendPort);

    // Отправляем запрос на текущий URL
    fetch(`http://localhost:${currentBackendPort}/api/main`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Data received from:", `http://localhost:${currentBackendPort}/api/main`);
            console.log(data);
            // здесь можно обработать полученные данные
            // Assuming this function exists and is capable of handling the data
            window.location.reload();
        })
        .catch(error => {
            console.error('Error when receiving data:', error);
        });
}

// Добавляем обработчик события на нажатие кнопки
buttonElement.addEventListener('click', buttonClickHandler);

// Функция для получения начальных данных
function getInitialSiteMap() {
    fetch(`http://localhost:${currentBackendPort}/api/main`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Initial data received from:", `http://localhost:${currentBackendPort}/api/main`);
            console.log(data);
            // здесь можно обработать полученные данные
            // Assuming this function exists and is capable of handling the data
            createHTML(data);
        })
        .catch(error => {
            console.error('Error when receiving the initial site map:', error);
        });
}
function getInitialSiteMap() {
    fetch(`http://localhost:${currentBackendPort}/api/main`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // create html from data
            console.log("Life is good");
            console.log(data);
            createHTML(data);
        })
        .catch(error => {
            console.error('Error when receiving the initial site map:', error);
        });
}

function createHTML(message) {
    let data = JSON.parse(message);
    for (let section in data) {
        switch (section) {
            case "header":
                createHeader(data.header[0]);
                break;
            case "navigation":
                createNavigation(data.navigation);
                break;
            case "body":
                createBody(data.body);
                break;
            // case "footer":
            //     createFooter(data.footer);
            //     break;
            default:
                console.log("Неизвестная секция:", section);
        }
    }
}

function createHeader(message) {
    if (message.type === "logo") {
        const logoSRC = message.url_image;
        let header = document.createElement("header");
        header.className = "header";
        header.appendChild(container);
        let logo = document.createElement("img");
        logo.setAttribute("src", logoSRC);
        logo.className = "logo";
        header.appendChild(logo);
        document.body.appendChild(header);
    }
}

function createNavigation(navigationItems) {
    let navigation = document.createElement("nav");
    navigation.className = 'navigation';
    navigation.appendChild(container);
    let ul = document.createElement('ul');

    for (let i = 0; i < navigationItems.length; i++) {
        if (navigationItems[i].type === "navbutton") {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.textContent = navigationItems[i].title;
            a.id = navigationItems[i].title;
            a.addEventListener('click', handleLinkClick);
            console.log('ID ссылки:', a.id)
            li.appendChild(a);
            ul.appendChild(li);
        }
        navigation.appendChild(ul);
        document.body.appendChild(navigation);
    }
}

function createBody(message) {
    let news = document.createElement("section");
    news.className = "news";
    let container = document.createElement("div"); // Создаем контейнер для новостей
    container.className = "container"; // Добавляем класс "container"
    news.appendChild(container); // Добавляем контейнер в раздел новостей
    for (let i = 0; i < message.length; i++) {
        if (message[i].type === "news") {
            let newsItem = document.createElement("article");
            newsItem.className = "news-item";
            container.appendChild(newsItem); // Добавляем элемент новости в контейнер
            let figure = document.createElement("figure");
            let img = document.createElement("img");
            let imgSRC = message[i].image;
            img.setAttribute("src", imgSRC);
            figure.appendChild(img);
            let figcaption = document.createElement("figcaption");
            let title = document.createElement("h2");
            title.textContent = message[i].title; // Устанавливаем текст заголовка
            figcaption.appendChild(title);
            let text = document.createElement("p");
            text.textContent = message[i].text; // Устанавливаем текст новости
            figcaption.appendChild(text);

            figure.appendChild(figcaption);
            newsItem.appendChild(figure);
        }
    }
    document.body.appendChild(news);
}


//request for backend
function handleLinkClick(event) {
    // Создаем объект для отправки
    const requestData = { id: event.target.id };

    // Отправляем POST-запрос
    fetch(`http://localhost:${currentBackendPort}/api/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData) // Преобразуем объект в JSON-строку
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            window.location.reload(); // Перезагружаем страницу после успешного выполнения запроса
        })
        .catch((error) => {
            console.error('Ошибка:', error);
        });

    console.log('ID ссылки:', event.target.id);
}

//all
let container = document.createElement("div");
container.className = "container";
window.onload = getInitialSiteMap;

$.ajaxSetup({
    cache: false
});