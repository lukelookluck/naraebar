from django.shortcuts import render

from .models import Bottle, Recipe
from .serializers import BottleSerializer, RecipeSerializer

from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from django.db.models import Max
import random


# def isValidQueryParams(param):
#     return param != '' and param is not None


# def filterQuery(request):
#     qs = Recipe.objects.all()
#     searchQuery = request.GET.get('search_query')
#     if isValidQueryParams(searchQuery):
#         qs = qs.filter(Q(name__icontains=searchQuery) | Q(
#             ingredients__icontains=searchQuery) | Q(id__icontains=searchQuery)).distinct()

#     return qs


# class randomRecipeViewset(viewsets.ReadOnlyModelViewSet):
#     queryset = Recipe.objects.all()
#     serializer_class = RecipeSerializer

#     def get_queryset(self):
#         return Recipe.objects.all().filter(id=pickRandom())


# class searchRecipeViewset(viewsets.ReadOnlyModelViewSet):
#     queryset = Recipe.objects.all()
#     serializer_class = RecipeSerializer

#     def get_queryset(self):
#         qs = filterQuery(self.request)
#         return qs


class recipeViewset(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    # 실제 사용시 아래 주석 해제할 것!
    # permission_classes = [IsAuthenticated]

    # def search(self):
    #     return filterQuery(self.request)


class bottleViewset(viewsets.ModelViewSet):
    queryset = Bottle.objects.all()
    serializer_class = BottleSerializer
    # 실제 사용시 아래 주석 해제할 것!
    # permission_classes = [IsAuthenticated]


def get_random_recipe(request):
    max_id = Recipe.objects.all().aggregate(max_id=Max("id"))['max_id']
    pk = random.randint(1, max_id)
    return Recipe.objects.get(pk=pk)
