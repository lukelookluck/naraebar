from django.shortcuts import render
from django.views import generic
from .models import Recipe, Ingredient, IngredientCategory
from .serializers import RecipeSerializer, IngredientSerializer
from rest_framework import generics, mixins, permissions, status
from rest_framework.decorators import permission_classes, authentication_classes, api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication


class recipeListViewset(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    # 실제 사용시 아래 주석 해제할 것!
    # permission_classes = [IsAuthenticated]

    def search(self):
        return filterQuery(self.request)

    def detail(self):
        pass
