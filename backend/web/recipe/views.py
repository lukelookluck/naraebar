from django.shortcuts import render
from django.views import generic
from .models import Recipe, Ingredient, IngredientCategory
from .serializers import RecipeSerializer, IngredientSerializer
from rest_framework import generics, mixins, permissions, status
from rest_framework.decorators import permission_classes, authentication_classes, api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication


@permission_classes((IsAuthenticated,))
@authentication_classes((JSONWebTokenAuthentication,))
class recipeListView(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.ListCreateAPIView):
    model = Recipe
    context_object_name = 'recipe_list'
    queryset = Recipe.objects.all().order_by('-rating')
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]
    # template_name = '#'


class recipeDetailView(generics.ListAPIView):
    model = Recipe
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Recipe.objects.all().order_by('-rating')

    # @permission_classes((IsAuthenticated,))
    # @authentication_classes((JSONWebTokenAuthentication,))
    # class UploadRecipe(generics.RetrieveUpdateDestroyAPIView):
    #     queryset = Recipe.objects.all()
    #     serializer_class = RecipeSerializer
    #     permission_classes = [IsAuthenticated]

    # @permission_classes((IsAuthenticated,))
    # @authentication_classes((JSONWebTokenAuthentication,))
    # class DeleteRecipe(generics.RetrieveDestroyAPIView):
    #     queryset = Recipe.objects.all()
    #     serializer_class = RecipeSerializer
    #     permission_classes = [IsAuthenticated]
