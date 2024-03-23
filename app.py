from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route('/')
def get_message_from_api():
    response = requests.get('http://localhost:5001/api/message')
    message = response.json()
    return render_template('index.html', message=message)

if __name__ == '__main__':
    app.run(port=5000)