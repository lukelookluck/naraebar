from django.urls import path
from . import views

app_name = "community"

urlpatterns =[
    path('', views.ListArticle.as_view()),
    path('<int:article_pk>/', views.DetailArticle.as_view()),
]
