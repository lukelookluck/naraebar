from django.db import models
from django.conf import settings


class Article(models.Model):
    name = models.CharField(max_length=20)
    detail = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='articles')
    ingredients = models.TextField()
    LIKE = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_articles')
    DISLIKE = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='dislike_articles')
    


