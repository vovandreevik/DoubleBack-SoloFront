function getInitialSiteMap() {
    fetch('http://localhost:5001/api/main')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // create html from data
            createHTML(data);
        })
        .catch(error => {
            console.error('Ошибка при получении начальной карты сайта:', error);
        });
}

function createHTML(message) {


    console.log(message);
    let data = JSON.parse(message);
    console.log(data);
    console.log(data.header[0].url_image);
    console.log(data.navigation);
    console.log(data.body);
    for (let section in data) {
        switch (section) {
            case "header":
                createHeader(data.header[0]);
                break;
            case "navigation":
                createNavigation(data.navigation);
                break;
            case "body":
                //createBody(data[section]);
                break;
            case "footer":
                //createFooter(data[section]);
                break;
            default:
                console.log("Неизвестная секция:", section);
        }
    }
}

function createHeader(message) {
    if (message.type === "logo") {
        const logoSRC = message.url_image;
        console.log(logoSRC)
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
    console.log(navigationItems);

    let navigation = document.createElement("nav");
    navigation.className = 'navigation';
    navigation.appendChild(container);
    let ul = document.createElement('ul');

    for (let i = 0; i < navigationItems.length; i++) {

        if (navigationItems[i].type === "navbutton") {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.setAttribute("href", "");

            a.textContent = navigationItems[i].title;
            a.id = navigationItems[i];
            li.appendChild(a);
            ul.appendChild(li);
        }

        navigation.appendChild(ul);
        document.body.appendChild(navigation);
    }

}
    //all
    let container = document.createElement("div");
    container.className = "container";
    window.onload = getInitialSiteMap;

