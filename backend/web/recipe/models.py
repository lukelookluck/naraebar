from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils import timezone


class Recipe(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=50)
    content = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    uploaded_at = models.DateTimeField(auto_now=True)
    like_users = models.ManyToManyField(
        settings.AUTH_USER_MODEL, related_name='like_recipe_users')
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)])
    daily_ranking = models.IntegerField(default=999)
    weekly_ranking = models.IntegerField(default=999)
    monthly_ranking = models.IntegerField(default=999)

    def upload_time(self):
        self.uploaded_at = timezone.now()
        self.save()


class Ingredient_category(models.Model):
    name = models.CharField(max_length=100)
    is_alcohol = models.BooleanField()


class Ingredient(models.Model):
    recipes = models.ManyToManyField(Recipe)
    category = models.ForeignKey(Ingredient_category, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    volume_ml = models.IntegerField(default=0)
