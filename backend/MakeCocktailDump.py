def MakeCocktaulDump():
    API_KEY = 1

    url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

    cocktail = request.get(url).json()
