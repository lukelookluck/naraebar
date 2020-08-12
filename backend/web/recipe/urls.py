from django.urls import path
from . import views
# urlpatterns = [
#     path('list/', views.RecipeList.as_view()),
#     path('upload/', views.UploadRecipe.as_view()),
#     path('<int:recipe_pk>/delete/', views.DeleteRecipe.as_view()),
# ]

urlpatterns = [
    url(r'^recipe/$', recipeListView.as_view(), name='recipe'),
    url(r'^recipe/(?P<pk>)/detail/$', recipeDetail.as_view(), name='detail'),
]
