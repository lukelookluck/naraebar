from django.shortcuts import render
from django.db.models import Q
from .models import Bottle, Recipe
from .serializers import BottleSerializer, RecipeSerializer
from rest_framework import viewsets, filters
import random


def isValidQueryParams(param):
    return param != '' and param is not None


def filterQuery(request):
    qs = Recipe.objects.all()
    searchQuery = request.GET.get('search_query')
    if isValidQueryParams(searchQuery):
        qs = qs.filter(Q(name__icontains=searchQuery) | Q(
            ingredients__icontains=searchQuery) | Q(id__icontains=searchQuery)).distinct()

    return qs


def pickRandom():
    return random.randrange(1, Recipe.objects.all().count() + 1)


class randomRecipeViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def get_queryset(self):
        return Recipe.objects.all().filter(id=pickRandom())


class searchRecipeViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def get_queryset(self):
        qs = filterQuery(self.request)
        return qs


class recipeViewset(viewsets.ModelViewSet):
    query = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]


class bottleViewset(viewsets.ModelViewSet):
    query = Bottle.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]
