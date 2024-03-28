let buttonElement = document.createElement("button");
buttonElement.setAttribute("id", "backendButton");
buttonElement.className = "Button";
buttonElement.textContent = "Бэкенд 1";
document.body.appendChild(buttonElement);

function saveButtonState(port) {
    localStorage.setItem('currentBackendPort', port);
}

function loadButtonState() {
    let savedPort = localStorage.getItem('currentBackendPort');
    return savedPort ? parseInt(savedPort, 10) : 5001;
}

let currentBackendPort = loadButtonState();

function buttonClickHandler() {
    currentBackendPort = currentBackendPort === 5001 ? 5002 : 5001;
    buttonElement.textContent = currentBackendPort === 5001 ? "Бэкенд 1" : "Бэкенд 2";
    saveButtonState(currentBackendPort);

    fetch(`http://localhost:${currentBackendPort}/api/main`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            window.location.reload();
        })
        .catch(error => {
            console.error('Error when receiving data:', error);
        });
}

buttonElement.addEventListener('click', buttonClickHandler);

function getInitialSiteMap() {
    fetch(`http://localhost:${currentBackendPort}/api/main`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
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
    let container = document.createElement("div");
    container.className = "container";
    news.appendChild(container);
    for (let i = 0; i < message.length; i++) {
        if (message[i].type === "news") {
            let newsItem = document.createElement("article");
            newsItem.className = "news-item";
            container.appendChild(newsItem);
            let figure = document.createElement("figure");
            let img = document.createElement("img");
            let imgSRC = message[i].image;
            img.setAttribute("src", imgSRC);
            figure.appendChild(img);
            let figcaption = document.createElement("figcaption");
            let title = document.createElement("h2");
            title.textContent = message[i].title;
            figcaption.appendChild(title);
            let text = document.createElement("p");
            text.textContent = message[i].text;
            figcaption.appendChild(text);
            figure.appendChild(figcaption);
            newsItem.appendChild(figure);
        }
    }
    document.body.appendChild(news);
}

function handleLinkClick(event) {
    const requestData = { id: event.target.id };

    fetch(`http://localhost:${currentBackendPort}/api/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            window.location.reload();
        })
        .catch((error) => {
            console.error('Ошибка:', error);
        });

}

let container = document.createElement("div");
container.className = "container";
window.onload = getInitialSiteMap;

