from django.urls import path
from . import views

app_name = "recipe"

urlpatterns = [
    path('', views.ListArticle.as_view()),
    path('<int:article_pk>/', views.DetailArticle.as_view()),
]
