from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.postgres.fields import JSONField


class Bottle(models.Model):
    name = models.CharField(max_length=100)
    nozzle = models.PositiveIntegerField(
        default=1, validators=[MinValueValidator(1), MaxValueValidator(4)])
    inserted_at = models.DateTimeField(auto_now_add="true")
    capacity = models.IntegerField()
    isalcohol = models.BooleanField()

    def __str__(self):
        return '{}: {}'.format(self.name, self.nozzle)


class Recipe(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add="true")
    detail = models.TextField(max_length=300)
    ingredients = JSONField()
    # image = models.ImageField(upload_to="image/bartender", blank="true")
