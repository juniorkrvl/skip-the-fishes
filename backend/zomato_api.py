import requests
import json

API_KEY = '58df8bd21f9aeda52d6a784db5474d7a'

def get_restaurants():
    with open('mock/restaurants.json', 'r') as restaurants:
        return json.load(restaurants)