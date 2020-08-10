from django.db import models


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
    detail = models.TextField(max_lengh=300)
    ingredients = models.JSONField(encoder="None")
    image = models.ImageField()

    def __str__(self):
        return '{}: {}'.format(self.name, self.image)
