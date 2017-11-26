from random import *
import json

API_KEY = '58df8bd21f9aeda52d6a784db5474d7a'

def get_restaurants():
    with open('mock/restaurants.json', 'r') as restaurants:
        return json.load(restaurants)

def get_restaurant(id):
    rest_list = []
    with open('mock/restaurants.json', 'r') as restaurants:
        rest_list = json.load(restaurants)
    
    restaurant = [rest for rest in rest_list['restaurants'] if rest['restaurant']['id'] == str(id)]
    if len(restaurant) == 0:
        return { "code": 13223, "messsage": "Restaurant doesn't exist"  }
    else:
        return restaurant[0]['restaurant']

def get_meals(res_id):
    meals_obj = {}
    with open('mock/meals.json', 'r') as meals:
        meals_obj = json.load(meals)

    results = []
    for idx in range(0,4):
        print idx
        meal = {
            "description": meals_obj['meals'][idx]['description'],
            "name": meals_obj['meals'][idx]['name'],
            "image": 'assets/img/food{0}.jpg'.format(str(randint(1,8))),
            "price": round(uniform(7.99,35.99),2)
        }
        results.append(meal)
        print meal

    return results