from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    message = "Hello, World(via Python)"
    return render_template('index.html', message=message)

if __name__ == '__main__':
    app.run()