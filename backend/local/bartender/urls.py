from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('recipe', views.recipeViewset)
router.register('bottle', views.bottleViewset)

urlpatterns = [
    path('', include(router.urls)),
    path('recipe/make_cocktail/<int:pk>', views.recipeViewset.make_cocktail),
    path('recipe/done', views.recipeViewset.done),
    path('recipe/wash', views.recipeViewset.wash),
]
