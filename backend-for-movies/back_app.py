from flask import Flask, jsonify
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

class NavButton(Component):
    def __init__(self, title):
        super().__init__("navbutton", title=title)


class MovieSession(Component):
    def __init__(self, theme, image, title, text):
        super().__init__("news", theme=theme, image=image, title=title, text=text)

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

@app.route('/api/main')
def get_message():
    # Создаем экземпляр DataTemplate и добавляем компоненты
    message = DataTemplate()
    message.add_component("header", Logo("https://idyllic-donut-3ece02.netlify.app/logo.svg"))
    message.add_component("footer", Footer("Copyright 2022"))

    nav_buttons = [
        ("Главная"),
        ("Спорт"),
        ("Россия"),
        ("Фантастика"),
        ("Ужасы"),
        ("Боевик"),
    ]

    for title in nav_buttons:
        nav_button = NavButton(title)
        message.add_component("navigation", nav_button)

    movie_sessions = [
        ("","https://idyllic-donut-3ece02.netlify.app/1_1.jpg", "Степной волк", "2024 год, 19:00, 23:30"),
        ("","https://idyllic-donut-3ece02.netlify.app/2_1.jpg", "Я хочу! Я буду!", "2023 год, 18:00, 21:00"),
        ("","https://idyllic-donut-3ece02.netlify.app/3_1.jpg", "Давайте съедем", "2023 год, 16:00, 20:00"),
        ("","https://idyllic-donut-3ece02.netlify.app/4_1.jpg", "Одна дома", "2023 год, 17:30, 22:00"),
        ("","https://idyllic-donut-3ece02.netlify.app/5_1.jpg", "Дорога к дому", "2023 год, 18:30, 21:30"),
        ("","https://idyllic-donut-3ece02.netlify.app/6_1.jpg", "Пять процентов", "2023 год, 20:30"),
        ("","https://idyllic-donut-3ece02.netlify.app/7_1.jpg", "Праздники", "2023 год, 19:30, 22:30"),
        ("","https://idyllic-donut-3ece02.netlify.app/8_1.jpg", "На Рубле", "2023 год, 18:45, 21:45"),
        ("","https://idyllic-donut-3ece02.netlify.app/9_1.jpg", "Беспринципные", "2023 год, 17:00, 20:30"),
        ("","https://idyllic-donut-3ece02.netlify.app/10_1.jpg", "Моя ужасная сестра 2", "2024 год, 16:30, 19:45"),
        ("","https://idyllic-donut-3ece02.netlify.app/11_1.jpg", "Рассмеши меня все фильмы", "2023 год, 18:15, 21:15"),
        ("","https://idyllic-donut-3ece02.netlify.app/12_1.jpg", "Джентльмены", "2023 год, 19:45, 23:00"),
        ("","https://idyllic-donut-3ece02.netlify.app/13_1.jpg", "Сквозь снег", "2023 год, 18:30, 22:30"),
        ("","https://idyllic-donut-3ece02.netlify.app/14_1.jpg", "Коды", "2023 год, 19:15, 21:45"),
        ("","https://idyllic-donut-3ece02.netlify.app/15_1.jpg", "Шпион", "2023 год, 20:00, 22:15"),
        ("","https://idyllic-donut-3ece02.netlify.app/16_1.jpg", "Из глубины", "2024 год, 15:20, 23:45"),
    ]

    for theme, image, title, text in movie_sessions:
        movie_session = MovieSession(theme, image, title, text)
        message.add_component("body", movie_session)

    # Возвращаем JSON-ответ
    return jsonify(message.to_json())

if __name__ == '__main__':
    app.run(port=5001)
