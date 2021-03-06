from flask import Flask, jsonify
from flask_cors import CORS
import zomato_api

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Hello, world!", 200

@app.route('/restaurants')
def restaurants():
    results = zomato_api.get_restaurants()
    return jsonify(results)

@app.route('/restaurant/<res_id>')
def restaurant(res_id):
    results = zomato_api.get_restaurant(res_id)
    return jsonify(results)

@app.route('/restaurant/<meals_id>/meals')
def meals(meals_id):
    print id
    meals = zomato_api.get_meals(meals_id)
    return jsonify(meals)

# We only need this for local development.
if __name__ == '__main__':
    app.run()