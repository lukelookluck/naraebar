from django.db import models
from django.conf import settings
# from drink.models import Drink


class Article(models.Model):
    title = models.CharField(max_length=20)
    detail = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, related_name='articles')
    LIKE = models.ManyToManyField(
        settings.AUTH_USER_MODEL, related_name='like_articles')
    DISLIKE = models.ManyToManyField(
        settings.AUTH_USER_MODEL, related_name='dislike_articles')
    name = models.CharField(max_length=20)
    # drink = models.ForeignKey(Drink, on_delete=models.CASCADE)
    
    ingredients = models.TextField()


class Comment(models.Model):
    content = models.TextField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, related_name='my_comments')
    article = models.ForeignKey(
        Article, on_delete=models.CASCADE, related_name='comments')
    parent = models.ForeignKey(
        'self', related_name='replys', on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
