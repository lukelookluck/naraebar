from django.urls import path
from . import views

app_name = "recipe"

urlpatterns = [
    path('', views.RecipeList.as_view()),
    path('<int:article_pk>/', views.UploadRecipe.as_view()),
]
