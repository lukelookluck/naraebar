from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.postgres.fields import JSONField


class Bottle(models.Model):
    name = models.CharField(max_length=100)
    nozzle = models.PositiveIntegerField(
        default=1, validators=[MinValueValidator(1), MaxValueValidator(4)])
    inserted_at = models.DateTimeField(auto_now_add="true")
    capacity = models.IntegerField()
    strAlcoholic = models.BooleanField(default="null")

    def __str__(self):
        return '{}: {}'.format(self.name, self.nozzle)


class Recipe(models.Model):
    # MyBar/CocktailDump.json 참조
    author = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add="true")

    idDrink = models.IntegerField(default=9999)
    strDrink = models.CharField(max_length=100)
    strInstructions = models.TextField(max_length=300)
    strAlcoholic = models.BooleanField(default="null")

    strIngredient1 = models.CharField(max_length=100, default="null")
    strMeasure1 = models.PositiveIntegerField(default="null")
    strIngredient2 = models.CharField(max_length=100, default="null")
    strMeasure2 = models.PositiveIntegerField(default="null")
    strIngredient3 = models.CharField(max_length=100, default="null")
    strMeasure3 = models.PositiveIntegerField(default="null")
    strIngredient4 = models.CharField(max_length=100, default="null")
    strMeasure4 = models.PositiveIntegerField(default="null")
    strIngredient5 = models.CharField(max_length=100, default="null")
    strMeasure5 = models.PositiveIntegerField(default="null")
    strIngredient6 = models.CharField(max_length=100, default="null")
    strMeasure6 = models.PositiveIntegerField(default="null")

    # image = models.ImageField(upload_to="image/bartender", blank="true")
    strDrinkThumb = models.URLField(max_length=200, default="null")
