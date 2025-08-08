
from flask import Flask, request, jsonify, send_from_directory
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory('.', path)

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    try:
        response = requests.post(
            'http://localhost:11434/api/generate',
            json={'model': 'mistral', 'prompt': user_message, 'stream': False}
        )
        data = response.json()
        return jsonify({'response': data.get('response')})
    except Exception as e:
        return jsonify({'response': f'Ошибка: {e}'})

if __name__ == '__main__':
    app.run(debug=True)
