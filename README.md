
# DayBday Web Application

DayBday is a web application that provides users with news articles grouped by different categories such as sports, politics, culture, tourism, and more.

Users can navigate through these categories using the navigation bar and read articles of interest to them.

## Features
- Dynamic Content: The content on the website is dynamically generated based on user interactions and selections.
- Navigation: Users can navigate through different sections of the website using the navigation bar.
- Real-time Updates: Users can receive real-time updates by clicking on the "Backend" button, which switches between two backend servers.
- Responsive Design: The website is designed to be responsive and compatible with various devices and screen sizes.

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Python Flask framework
- Data Serialization: JSON
- Cross-Origin Resource Sharing (CORS): Implemented using Flask-CORS extension to allow communication between frontend and backend on different ports.
- Local Storage: Used to store and retrieve the current backend server port for real-time updates.

## Backend Servers

### Backend Server 1

- **Description**: This backend server serves as an API endpoint for updating and retrieving page structure data.
- **Routes**:
  - `/api/update`: POST request to update the title of the page structure.
  - `/api/main`: GET request to retrieve the page structure based on the title.
- **Components**:
  - Logo
  - NavButton
  - News
  - Footer

### Backend Server 2

- **Description**: This backend server serves as an API endpoint for retrieving page structure data.
- **Routes**:
  - `/api/main`: GET request to retrieve the page structure data.
- **Components**:
  - Logo
  - NavButton
  - MovieSession

## Frontend Application

- **Description**: The frontend application consumes APIs provided by the backend servers to render the user interface.
  
- **Features**:
  - Displays logos, navigation buttons, news articles, movie sessions, and footers based on the data received from the backend servers.
  - Allows users to update the page structure by sending requests to the backend servers.
  
## Getting Started
To run the DayBday web application locally, follow these steps:

- Clone this repository to your local machine.
- Install Python if you haven't already.
- Install Flask and Flask-CORS using pip:
```
pip install Flask Flask-CORS
```
- Navigate to the project directory in your terminal.
- Run the Flask application:
```
python app.py
```
- Open your web browser and go to `http://localhost:5001 to view the application`.

## How to Use
- Upon opening the application, you will see the main page with news articles from various categories.
- Use the navigation bar to filter news articles by category.
- Click on the "Backend" button to switch between two backend servers for real-time updates.


## Example of json
```
{
    "header": [
        {
            "type": "logo",
            "url_image": "https://idyllic-donut-3ece02.netlify.app/logo.svg"
        }
    ],
    "navigation": [
        {
            "type": "navbutton",
            "title": "Главная"
        },
        {
            "type": "navbutton",
            "title": "Спорт"
        },
        {
            "type": "navbutton",
            "title": "Россия"
        },
        {
            "type": "navbutton",
            "title": "Санкт-Петербург"
        },
        {
            "type": "navbutton",
            "title": "Туризм"
        },
        {
            "type": "navbutton",
            "title": "Образование"
        }
    ],
    "body": [
        {
            "type": "news",
            "theme": "Спорт",
            "image": "https://idyllic-donut-3ece02.netlify.app/1.jpg",
            "title": "Футбол",
            "text": "Сборная России по футболу одержала победу над сборной Сербии со счетом 2:1 в товарищеском матче, который состоялся 21 марта в Москве. Голы за россиян забили Александр Головин и Артем Дзюба"
        },
        {
            "type": "news",
            "theme": "Спорт",
            "image": "https://idyllic-donut-3ece02.netlify.app/2.jpg",
            "title": "Хоккей",
            "text": "ЦСКА одержал победу над 'Автомобилистом' со счетом 3:2 в третьем матче серии плей-офф КХЛ. Таким образом, петербургский клуб повел в серии со счетом 2-1."
        },
        {
            "type": "news",
            "theme": "Спорт",
            "image": "https://idyllic-donut-3ece02.netlify.app/3.jpg",
            "title": "Баскетбол",
            "text": "ЦСКА обыграл 'Зенит' со счетом 78:75 в пятом матче финальной серии Единой лиги ВТБ. Таким образом, ЦСКА стал чемпионом Единой лиги ВТБ в 12-й раз."
        },
        {
            "type": "news",
            "theme": "Спорт",
            "image": "https://idyllic-donut-3ece02.netlify.app/4.jpg",
            "title": "Биатлон",
            "text": "Эдуард Латыпов выиграл золотую медаль в масс-старте на этапе Кубка мира в Осло. Вторым стал норвежец Йоханнес Бё, третьим - француз Кентен Фийон-Майе."
        },
        {
            "type": "news",
            "theme": "Россия",
            "image": "https://idyllic-donut-3ece02.netlify.app/5.png",
            "title": "Экономика",
            "text": "ВВП России в 2023 году вырос на 3,5%. Это самый высокий рост за последние 4 года."
        },
        {
            "type": "news",
            "theme": "Россия",
            "image": "https://idyllic-donut-3ece02.netlify.app/6.jpg",
            "title": "Политика",
            "text": "Президент России Владимир Путин выступил с посланием Федеральному Собранию. В своем послании он затронул вопросы экономики, социальной политики, безопасности и внешней политики."
        },
        {
            "type": "news",
            "theme": "Россия",
            "image": "https://idyllic-donut-3ece02.netlify.app/7.jpg",
            "title": "Общество",
            "text": "В России прошел День защитника Отечества. В этот день чествуют всех, кто служил или служит в армии."
        },
        {
            "type": "news",
            "theme": "Россия",
            "image": "https://idyllic-donut-3ece02.netlify.app/8.jpg",
            "title": "Культура",
            "text": "В Москве открылся новый музей современного искусства. Музей называется 'Гараж'."
        },
        {
            "type": "news",
            "theme": "Санкт-Петербург",
            "image": "https://idyllic-donut-3ece02.netlify.app/9.jpg",
            "title": "Культура",
            "text": "В Санкт-Петербурге проходит фестиваль 'Императорские театры России'. В рамках фестиваля проходят спектакли ведущих театров России."
        },
        {
            "type": "news",
            "theme": "Санкт-Петербург",
            "image": "https://idyllic-donut-3ece02.netlify.app/10.jpg",
            "title": "Туризм",
            "text": "Санкт-Петербург вошел в пятерку самых популярных туристических направлений в мире."
        },
        {
            "type": "news",
            "theme": "Санкт-Петербург",
            "image": "https://idyllic-donut-3ece02.netlify.app/11.jpg",
            "title": "Экономика",
            "text": "В Санкт-Петербурге открылся новый завод по производству электромобилей."
        },
        {
            "type": "news",
            "theme": "Санкт-Петербург",
            "image": "https://idyllic-donut-3ece02.netlify.app/12.jpg",
            "title": "Образование",
            "text": "В Санкт-Петербургском государственном университете открылся новый факультет - факультет искусственного интеллекта."
        },
        {
            "type": "news",
            "theme": "Туризм",
            "image": "https://idyllic-donut-3ece02.netlify.app/13.png",
            "title": "Внутренний туризм",
            "text": "В 2023 году число туристов, посетивших Россию, выросло на 10%."
        },
        {
            "type": "news",
            "theme": "Туризм",
            "image": "https://idyllic-donut-3ece02.netlify.app/14.jpg",
            "title": "Международный туризм",
            "text": "Россия вошла в десятку самых популярных туристических направлений для туристов из Китая."
        },
        {
            "type": "news",
            "theme": "Туризм",
            "image": "https://idyllic-donut-3ece02.netlify.app/15.jpg",
            "title": "Гастрономический туризм",
            "text": "В России проходит фестиваль 'Вкусы России'. В рамках фестиваля можно попробовать блюда из разных регионов России."
        },
        {
            "type": "news",
            "theme": "Туризм",
            "image": "https://idyllic-donut-3ece02.netlify.app/16.jpg",
            "title": "Экотуризм",
            "text": "В России набирает популярность экотуризм. Туристы едут в Россию, чтобы увидеть уникальные природные красоты страны."
        },
        {
            "type": "news",
            "theme": "Образование",
            "image": "https://idyllic-donut-3ece02.netlify.app/17.jpg",
            "title": "Школьное образование",
            "text": "В России вводится новая система оценки знаний - ФГОС 3.0."
        },
        {
            "type": "news",
            "theme": "Образование",
            "image": "https://idyllic-donut-3ece02.netlify.app/18.jpg",
            "title": "Высшее образование",
            "text": "В России увеличивается число бюджетных мест в вузах."
        },
        {
            "type": "news",
            "theme": "Образование",
            "image": "https://idyllic-donut-3ece02.netlify.app/19.png",
            "title": "Дополнительное образование",
            "text": "В России набирают популярность онлайн-курсы."
        },
        {
            "type": "news",
            "theme": "Образование",
            "image": "https://idyllic-donut-3ece02.netlify.app/20.jpg",
            "title": "Профессиональное образование",
            "text": "В России создаются новые центры опережающей подготовки кадров."
        }
    ],
    "footer": [
        {
            "type": "footer",
            "text": "https://idyllic-donut-3ece02.netlify.app/footer.svg"
        }
    ]
}
```
