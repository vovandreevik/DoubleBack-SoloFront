let message
let container = document.createElement("div");
container.className = "container";

document.addEventListener('DOMContentLoaded', function () {
    let element = document.getElementById('python');
    message = element.getAttribute('data-message');
    console.log(message); // Теперь вы должны увидеть значение `data-message` в консоли

    createHTML(message);
});

function createHTML(message) {
    y
    let logoSRC = 'https://idyllic-donut-3ece02.netlify.app/logo.svg';
    createHeader(logoSRC);
}

function createHeader(logoSRC) {
    let header = document.createElement("header");
    header.className = "header";
    header.appendChild(container);

    let logo = document.createElement("img");
    logo.setAttribute("src", logoSRC);
    logo.className = "logo";
    header.appendChild(logo);

    document.body.appendChild(header);
}

function createNavigation(navigationItems){

}