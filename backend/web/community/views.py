from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.decorators import permission_classes, authentication_classes
from .models import Article, Comment
from .serializers import ArticleSerializer, CommentSerializer
from django_filters.rest_framework import DjangoFilterBackend


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
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['article']
