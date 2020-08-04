from django.shortcuts import render, get_object_or_404

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Article
from .serializers import ArticleSerializer


@api_view(['GET'])
def detail(request, article_pk):
    print(article_pk)
    article = Article.objects.get(id=article_pk)
    print(article)
    serializer = ArticleSerializer(article)
    print("ASDASDASDAS", serializer)
    return Response(serializer.data)


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def create(request):
    print(request)
    serializer = ArticleSerializer(data=request.data)
    print(request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.data)

