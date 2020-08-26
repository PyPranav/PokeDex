from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse
# import requests
import json
from difflib import get_close_matches

def home(request):
    return render(request, 'home.html')

def pokemon(request):
    if request.method == "POST":
        name = request.POST.get('search-box')
        print(name)
        with open('static/poke_name.json', "r") as f:
            data = json.load(f)
        try:
            name = int(name)
            r = list(data.values())[name-1]
        except Exception:
            pokemon = list(data.keys())
            name = get_close_matches(name, pokemon)[0]
            print(name)
            r = data[name]
        with open('static/pokemon.json', 'w') as f:
            json.dump(r, f)
        return render(request, 'pokemon.html', {'name': name})