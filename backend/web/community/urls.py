from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name = "community"

urlpatterns = [
    path('', views.ListArticle.as_view()),
    path('<int:pk>/', views.DetailArticle.as_view()),
    path('comment/', views.ListComment.as_view()),

    path('article/<int:article_pk>/', views.LikeArticle),
    path('comment/<int:comment_pk>/', views.LikeComment),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
