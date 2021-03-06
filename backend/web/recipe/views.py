from django.shortcuts import render
from django.views.generic.list import ListView
from .models import Recipe, Ingredient, IngredientCategory
from .serializers import RecipeSerializer, IngredientSerializer, IngredientCategorySerializer
from rest_framework import viewsets, generics, mixins, permissions, status
from rest_framework.decorators import permission_classes, authentication_classes, action
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.response import Response
from django.db.models import Max
import random


class recipeListViewset(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    # 실제 사용시 아래 주석 해제할 것!
    permission_classes = [IsAuthenticated]
