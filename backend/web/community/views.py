from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.decorators import permission_classes, authentication_classes, api_view
from rest_framework.response import Response
from .models import Article, Comment
from accounts.models import User
from .serializers import ArticleSerializer, CommentSerializer
from django_filters.rest_framework import DjangoFilterBackend
from django.core import serializers
import json

# @permission_classes((IsAuthenticated,))
# @authentication_classes((JSONWebTokenAuthentication,))


class ListArticle(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


# @permission_classes((IsAuthenticated,))
# @authentication_classes((JSONWebTokenAuthentication,))
class DetailArticle(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


# @permission_classes((IsAuthenticated,))
# @authentication_classes((JSONWebTokenAuthentication,))
class ListComment(generics.ListCreateAPIView):
    queryset = Comment.objects.filter(parent=None)
    # queryset = queryset.filter(parent=None)

    serializer_class = CommentSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['article']  # 요청받은 article과 같은 값을 가진 댓글만 가져오기


class DetailComment(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = ArticleSerializer


@api_view(['POST'])
def LikeArticle(request, article_pk):
    article = Article.objects.get(pk=article_pk)
    user_id = request.data.get('user')
    user = User.objects.get(id=user_id)
    LIKE = article.LIKE.all()

    if user in LIKE:
        article.LIKE.remove(user)
    else:
        article.LIKE.add(user)

    result = article.LIKE.all()
    print(result)
    data = ArticleSerializer(instance=article)
    # structure = serializers.serialize('json', LIKE)
    return Response(data.data)


@ api_view(['POST'])
def SaveArticle(request, article_pk):
    article = Article.objects.get(pk=article_pk)
    user_id = request.data.get('user')
    user = User.objects.get(id=user_id)
    SAVE = article.SAVE.all()

    if user in SAVE:
        article.SAVE.remove(user)
    else:
        article.SAVE.add(user)

    result = article.SAVE.all()
    print(result)
    data = ArticleSerializer(instance=article)

    return Response(data.data)


@ api_view(['POST'])
def LikeComment(request, comment_pk):
    comment = Comment.objects.get(pk=comment_pk)
    user_id = request.data.get('user')
    user = User.objects.get(id=user_id)
    LIKE = comment.LIKE.all()

    if user in LIKE:
        comment.LIKE.remove(user)
    else:
        comment.LIKE.add(user)
    result = comment.LIKE.all().count()
    print(result)
    return Response(result)


# @ api_view(['GET'])
# def SinkArticle(request, pk):
#     pass

