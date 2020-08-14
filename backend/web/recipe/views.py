from django.shortcuts import render
from .models import Recipe, Ingredient, IngredientCategory
from .serializers import RecipeSerializer, IngredientSerializer, IngredientCategorySerializer
from rest_framework import viewsets, filters, generics, mixins, permissions, status
from rest_framework.decorators import permission_classes, authentication_classes, api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.response import Response
from django.db.models import Max
import random


<<<<<<< HEAD
class recipeViewset(viewsets.ModelViewSet):
=======
<<<<<<< HEAD
# @permission_classes((IsAuthenticated,))
# @authentication_classes((JSONWebTokenAuthentication,))
# class recipeListView(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.ListCreateAPIView):
#     model = Recipe
#     context_object_name = 'recipe_list'
#     queryset = Recipe.objects.all().order_by('-rating')
#     serializer_class = RecipeSerializer
#     permission_classes = [IsAuthenticated]
#     # template_name = '#'


class recipeDetailView(generics.ListAPIView):
    model = Recipe
    serializer_class = RecipeSerializer
=======
class recipeListViewset(viewsets.ModelViewSet):
>>>>>>> f8ae5d5486fd6b52e34ecdbb2391750b3835f7dd
>>>>>>> 37eb06a578ddc41ab4f9b67f9ac734e6ce80f0e4
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    # 실제 사용시 아래 주석 해제할 것!
    # permission_classes = [IsAuthenticated]

    def search(self):
        return filterQuery(self.request)

    def detail(self):
        pass
