from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils import timezone


class Recipe(models.Model):
    # MyBar/CocktailDump.json
    author = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add="true")

    idDrink = models.IntegerField(default=9999)
    strDrink = models.CharField(max_length=100)
    strInstructions = models.TextField(max_length=300)
    strAlcoholic = models.BooleanField(default="true")

    strIngredient1 = models.CharField(max_length=100, default="null")
    strMeasure1 = models.PositiveIntegerField(default="0")
    strIngredient2 = models.CharField(max_length=100, default="null")
    strMeasure2 = models.PositiveIntegerField(default="0")
    strIngredient3 = models.CharField(max_length=100, default="null")
    strMeasure3 = models.PositiveIntegerField(default="0")
    strIngredient4 = models.CharField(max_length=100, default="null")
    strMeasure4 = models.PositiveIntegerField(default="0")
    strIngredient5 = models.CharField(max_length=100, default="null")
    strMeasure5 = models.PositiveIntegerField(default="0")
    strIngredient6 = models.CharField(max_length=100, default="null")
    strMeasure6 = models.PositiveIntegerField(default="0")

    imgDrink = models.ImageField(upload_to="image/bartender", blank="true")
    # strDrinkThumb = models.URLField(max_length=200, default="null")


class IngredientCategory(models.Model):
    name = models.CharField(max_length=100)
    is_alcohol = models.BooleanField()


class Ingredient(models.Model):
    recipes = models.ManyToManyField(Recipe)
    category = models.ForeignKey(IngredientCategory, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    volume_ml = models.IntegerField(default=0)
