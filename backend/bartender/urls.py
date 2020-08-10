from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import randomRecipeViewset, searchRecipeViewset

router = DefaultRouter()
router.register('random', randomRecipeViewset)
router.register('search', searchRecipeViewset)

urlpatterns = [
    path('', include(router.urls))
]
