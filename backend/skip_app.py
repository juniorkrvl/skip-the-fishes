from flask import Flask, jsonify
from flask_cors import CORS
import zomato_api

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Hello, world!", 200

@app.route('/test')
def test():
    return "Hello, test!", 200

@app.route('/restaurants')
def get_restaurants():
    results = zomato_api.get_restaurants()
    return jsonify(results)

# We only need this for local development.
if __name__ == '__main__':
    app.run()