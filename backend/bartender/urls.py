from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import randomRecipeViewset, searchRecipeViewset, recipeViewset, bottleViewset

router = DefaultRouter()
router.register('random', randomRecipeViewset)
router.register('search', searchRecipeViewset)
router.register('recipe', recipeViewset)
router.register('bottle', bottleViewset)

urlpatterns = [
    path('', include(router.urls))
]
