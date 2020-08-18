from django.urls import path
from . import views


app_name = "community"

urlpatterns = [
    path('', views.ListArticle.as_view()),
    path('<int:pk>/', views.DetailArticle.as_view()),
    path('comment/', views.ListComment.as_view()),

    path('article_like/<int:article_pk>/', views.LikeArticle),
    path('article_save/<int:article_pk>/', views.SaveArticle),
    path('comment/<int:comment_pk>/', views.LikeComment),
]
