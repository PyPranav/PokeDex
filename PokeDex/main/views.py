from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse
import requests
import json

def home(request):
    return render(request, 'home.html')

def pokemon(request):
    if request.method == "POST":
        name = request.POST.get('search-box')
        print(name)
        r = requests.get("https://pokeapi.glitch.me/v1/pokemon/"+name).json()
        with open('static/pokemon.json', 'w') as f:
            json.dump(r, f)
        return render(request, 'pokemon.html', {'name': name})