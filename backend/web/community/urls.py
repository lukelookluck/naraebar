from django.urls import path
from . import views

app_name = "community"

urlpatterns = [
    path('', views.ListArticle.as_view()),
    path('<int:pk>/', views.DetailArticle.as_view()),
    path('comment/', views.ListComment.as_view()),
    
    path('article/<int:article_pk>/', views.LikeArticle),
    path('comment/<int:comment_pk>/', views.LikeComment),
]
