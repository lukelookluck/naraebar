from django.db import models
from django.conf import settings
# from django.contrib.postgres.fields import JSONField


class Article(models.Model):
    # 게시글 관련 정보 필드
    title = models.CharField(max_length=20)
    detail = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, related_name='articles')
    LIKE = models.ManyToManyField(
        settings.AUTH_USER_MODEL, related_name='like_articles', blank=True)

    # 레시피 관련 정보 필드
    drink_name = models.CharField(max_length=20)
    image = models.ImageField(upload_to="%Y/%m/%d", blank=True)
    # 레시피 재료 정보 필드
    ingredient1 = models.CharField(max_length=30, null=True, blank=True)
    ingredient2 = models.CharField(max_length=30, null=True, blank=True)
    ingredient3 = models.CharField(max_length=30, null=True, blank=True)
    ingredient4 = models.CharField(max_length=30, null=True, blank=True)
    ingredient5 = models.CharField(max_length=30, null=True, blank=True)
    ingredient6 = models.CharField(max_length=30, null=True, blank=True)
    measure1 = models.CharField(max_length=30, null=True, blank=True)
    measure2 = models.CharField(max_length=30, null=True, blank=True)
    measure3 = models.CharField(max_length=30, null=True, blank=True)
    measure4 = models.CharField(max_length=30, null=True, blank=True)
    measure5 = models.CharField(max_length=30, null=True, blank=True)
    measure6 = models.CharField(max_length=30, null=True, blank=True)


class Comment(models.Model):
    content = models.TextField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, related_name='my_comments')
    article = models.ForeignKey(
        Article, on_delete=models.CASCADE, related_name='comments')
    parent = models.ForeignKey(
        'self', related_name='replys', on_delete=models.CASCADE, null=True, blank=True)
    LIKE = models.ManyToManyField(
        settings.AUTH_USER_MODEL, related_name='comment_articles', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
