from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import recipeViewset, bottleViewset

router = DefaultRouter()
router.register('recipe', recipeViewset)
router.register('bottle', bottleViewset)

urlpatterns = [
    path('', include(router.urls))
]
