//all
let container = document.createElement("div");
container.className = "container";

//header
let header = document.createElement("header");
header.className = "header";
header.appendChild(container);

let logo = document.createElement("img");
logo.setAttribute("src", "logo.svg");
logo.className = "logo";
header.appendChild(logo);

document.body.appendChild(header);

//navigation
let buttonsFromBack = ["Главная", "Спорт", "Россия", "Санкт-Петербург", "Туризм", "Образование"];

let navigation = document.createElement("nav");
navigation.className = 'navigation';
navigation.appendChild(container);

let ul = document.createElement('ul');

for (let i = 0; i < buttonsFromBack.length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href", "#");

    a.textContent = buttonsFromBack[i];
    li.appendChild(a);
    ul.appendChild(li);
}

navigation.appendChild(ul);
document.body.appendChild(navigation);

//news
newsData = [
    ("Спорт", "https://idyllic-donut-3ece02.netlify.app/1.jpg", "Футбол", "Сборная России по футболу одержала победу над сборной Сербии со счетом 2:1 в товарищеском матче, который состоялся 21 марта в Москве. Голы за россиян забили Александр Головин и Артем Дзюба"),
    ("Спорт", "https://idyllic-donut-3ece02.netlify.app/2.jpg", "Хоккей", "СКА одержал победу над 'Автомобилистом' со счетом 3:2 в третьем матче серии плей-офф КХЛ. Таким образом, петербургский клуб повел в серии со счетом 2-1."),
    ("Спорт", "https://idyllic-donut-3ece02.netlify.app/3.jpg", "Баскетбол", "ЦСКА обыграл 'Зенит' со счетом 78:75 в пятом матче финальной серии Единой лиги ВТБ. Таким образом, ЦСКА стал чемпионом Единой лиги ВТБ в 12-й раз."),
    ("Спорт", "https://idyllic-donut-3ece02.netlify.app/4.jpg", "Биатлон", "Эдуард Латыпов выиграл золотую медаль в масс-старте на этапе Кубка мира в Осло. Вторым стал норвежец Йоханнес Бё, третьим - француз Кентен Фийон-Майе."),
    ("Россия", "https://idyllic-donut-3ece02.netlify.app/5.png", "Экономика", "ВВП России в 2023 году вырос на 3,5%. Это самый высокий рост за последние 4 года."),
    ("Россия", "https://idyllic-donut-3ece02.netlify.app/6.jpg", "Политика", "Президент России Владимир Путин выступил с посланием Федеральному Собранию. В своем послании он затронул вопросы экономики, социальной политики, безопасности и внешней политики."),
    ("Россия", "https://idyllic-donut-3ece02.netlify.app/7.jpg", "Общество", "В России прошел День защитника Отечества. В этот день чествуют всех, кто служил или служит в армии."),
    ("Россия", "https://idyllic-donut-3ece02.netlify.app/8.jpg", "Культура", "В Москве открылся новый музей современного искусства. Музей называется 'Гараж'."),
    ("Санкт-Петербург", "https://idyllic-donut-3ece02.netlify.app/9.jpg", "Культура", "В Санкт-Петербурге проходит фестиваль 'Императорские театры России'. В рамках фестиваля проходят спектакли ведущих театров России."),
    ("Санкт-Петербург", "https://idyllic-donut-3ece02.netlify.app/10.jpg", "Туризм", "Санкт-Петербург вошел в пятерку самых популярных туристических направлений в мире."),
    ("Санкт-Петербург", "https://idyllic-donut-3ece02.netlify.app/11.jpg", "Экономика", "В Санкт-Петербурге открылся новый завод по производству электромобилей."),
    ("Санкт-Петербург", "https://idyllic-donut-3ece02.netlify.app/12.jpg", "Образование", "В Санкт-Петербургском государственном университете открылся новый факультет - факультет искусственного интеллекта."),
    ("Туризм", "https://idyllic-donut-3ece02.netlify.app/13.png", "Внутренний туризм", "В 2023 году число туристов, посетивших Россию, выросло на 10%."),
    ("Туризм", "https://idyllic-donut-3ece02.netlify.app/14.jpg", "Международный туризм", "Россия вошла в десятку самых популярных туристических направлений для туристов из Китая."),
    ("Туризм", "https://idyllic-donut-3ece02.netlify.app/15.jpg", "Гастрономический туризм", "В России проходит фестиваль 'Вкусы России'. В рамках фестиваля можно попробовать блюда из разных регионов России."),
    ("Туризм", "https://idyllic-donut-3ece02.netlify.app/16.jpg", "Экотуризм", "В России набирает популярность экотуризм. Туристы едут в Россию, чтобы увидеть уникальные природные красоты страны."),
    ("Образование", "https://idyllic-donut-3ece02.netlify.app/17.jpg", "Школьное образование", "В России вводится новая система оценки знаний - ФГОС 3.0."),
    ("Образование", "https://idyllic-donut-3ece02.netlify.app/18.jpg", "Высшее образование", "В России увеличивается число бюджетных мест в вузах."),
    ("Образование", "https://idyllic-donut-3ece02.netlify.app/19.png", "Дополнительное образование", "В России набирают популярность онлайн-курсы."),
    ("Образование", "https://idyllic-donut-3ece02.netlify.app/20.jpg", "Профессиональное образование", "В России создаются новые центры опережающей подготовки кадров."),
]
console.log(newsData);

let news = document.createElement("section");
news.className = "news";
news.appendChild(container);
for (let i = 0; i < newsData.length; i++) {
    let newsItem = document.createElement("article");
    newsItem.className = "news-item";
    news.appendChild(newsItem);
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    imgSRC = newsData[i][1];
    console.log(imgSRC);
    console.log(newsData[i][1]);
    img.setAttribute("src", imgSRC);
    figure.appendChild(img);
    let figcaption = document.createElement("figcaption");

    let title = document.createElement("h2");
    title = document.createTextNode(newsData[i][0]);
    figcaption.appendChild(title);
    let text = document.createElement("p");
    text = document.createTextNode(newsData[i][2]);
    figcaption.appendChild(text);

    figure.appendChild(figcaption);
    newsItem.appendChild(figure);
    document.body.appendChild(newsItem);
    console.log(newsItem);
}

document.body.appendChild(news);