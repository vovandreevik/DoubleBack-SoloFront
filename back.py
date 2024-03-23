import json

# Создаем словарь
message = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Преобразуем словарь в JSON
json_data = json.dumps(message)

return json_data

# Возвращаем JSON