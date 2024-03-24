from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # Allow requests from any origin

class Component:
    def __init__(self, type, **kwargs):
        self.type = type
        self.__dict__.update(kwargs)

class Logo(Component):
    def __init__(self, url_image):
        super().__init__("logo", url_image=url_image)

class Search(Component):
    def __init__(self, url_img, link):
        super().__init__("search", url_img=url_img, link=link)

class News(Component):
    def __init__(self, theme, image, title, text):
        super().__init__("news", theme=theme, image=image, title=title, text=text)

class NavButton(Component):
    def __init__(self, title):
        super().__init__("navbutton", title=title)

class Footer(Component):
    def __init__(self, text):
        super().__init__("footer", text=text)

class DataTemplate:
    def __init__(self):
        self.sections = []

    def add_component(self, section, component):
        self.sections.append((section, component.__dict__))

    def to_json(self):
        ordered_sections = {
            "header": [],
            "navigation": [],
            "body": [],
            "footer": []
        }
        for section, component in self.sections:
            if section in ordered_sections:
                ordered_sections[section].append(component)
        return json.dumps(ordered_sections, indent=4, ensure_ascii=False)


#DATA
header_logo = "https://idyllic-donut-3ece02.netlify.app/logo.png"

footer_text = "https://idyllic-donut-3ece02.netlify.app/footer.png"

nav_buttons = [
    ("Главная"),
    ("Спорт"),
    ("Россия"),
    ("Санкт-Петербург"),
    ("Туризм"),
    ("Образование"),
]

news_info = [
         ("Спорт", "https://idyllic-donut-3ece02.netlify.app/1.jpg", "Футбол", "Сборная России по футболу одержала победу над сборной Сербии со счетом 2:1 в товарищеском матче, который состоялся 21 марта в Москве. Голы за россиян забили Александр Головин и Артем Дзюба"),
    ("Спорт", "https://idyllic-donut-3ece02.netlify.app/2.jpg", "Хоккей", "ЦСКА одержал победу над 'Автомобилистом' со счетом 3:2 в третьем матче серии плей-офф КХЛ. Таким образом, петербургский клуб повел в серии со счетом 2-1."),
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
#END DATA

def generate_message(header_logo, nav_buttons, news_info, footer_text):
    # Создаем экземпляр DataTemplate и добавляем компоненты
    message = DataTemplate()
    
    # Добавляем компоненты header
    message.add_component("header", Logo(header_logo))
    
    # Добавляем кнопки навигации
    for title in nav_buttons:
        nav_button = NavButton(title)
        message.add_component("navigation", nav_button)

    # Добавляем компоненты body
    for theme, image, title, text in news_info:
        news_article = News(theme, image, title, text)
        message.add_component("body", news_article)

    # Добавляем footer
    message.add_component("footer", Footer(footer_text))
     
    return message


@app.route('/api/main')
def page():
    # global title
    # if title.lower() == 'главная':
    #     # Отображаем все элементы
    #     filtered_components = body_components_backup
    # elif title.lower() == 'добавить элемент':
    #     return jsonify({'error': 'Добавление элементов не поддерживается'}), 400
    
    # else:
    #     filtered_components = [component for component in body_components_backup if component.title.lower() == title.lower()]
    
    # Генерируем сообщение с отфильтрованными компонентами
    message = generate_message(header_logo, nav_buttons, news_info, footer_text)
    return jsonify(message.to_json())

    # @app.route('/api/update', methods=['POST'])
    # def update_page_structure():
    #     data = request.get_json()
    #     global title
    #     title = data['title']
    
if __name__ == '__main__':
    app.run(port=5001)
