from flask import Flask, render_template

app = Flask(__name__)

message = [
    [{'name': 'John', 'age': 30, 'city': 'New York'}, {'name': 'Mary', 'age': 35, 'city': 'Los Angeles'}, {'name': 'Jane', 'age': 40, 'city': 'Chicago'}],
    [{'name': 'Bob', 'age': 25, 'city': 'San Francisco'}, {'name': 'Sarah', 'age': 20, 'city': 'Dallas'}, {'name': 'Tom', 'age': 27, 'city': 'Seattle'}],
    [{'name': 'Alice', 'age': 32, 'city': 'Boston'}, {'name': 'David', 'age': 37, 'city': 'Atlanta'}, {'name': 'Emma', 'age': 45, 'city': 'Miami'}]
]


@app.route('/')
def hello_world():
    
    return render_template('index.html', message=message)

if __name__ == '__main__':
    app.run()