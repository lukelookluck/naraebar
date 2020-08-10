from django.urls import path
from . import views

app_name = "recipe"

urlpatterns = [
    path('list/', views.RecipeList.as_view()),
    path('upload/', views.UploadRecipe.as_view()),
    path('<int:recipe_pk>/delete/', views.DeleteRecipe.as_view()),
]
