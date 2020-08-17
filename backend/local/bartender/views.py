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


class recipeViewset(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    # permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'])
    def random(self, request, pk=None):
        max_id = Recipe.objects.all().aggregate(max_id=Max("id"))['max_id']
        pk = random.randint(1, max_id)
        random_recipe = Recipe.objects.get(pk=pk)
        serializer = self.get_serializer(random_recipe)
        return Response(serializer.data)


class bottleViewset(viewsets.ModelViewSet):
    queryset = Bottle.objects.all()
    serializer_class = BottleSerializer
    permission_classes = [IsAuthenticated]
