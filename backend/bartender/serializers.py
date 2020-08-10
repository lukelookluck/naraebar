from rest_framework import serializers
from .models import Bottle, Recipe


class bottleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bottle
        fields = '__all__'


class recipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'
