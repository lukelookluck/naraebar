from rest_framework import serializers
from .models import Bottle, Recipe


class BottleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bottle
        fields = '__all__'


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'
