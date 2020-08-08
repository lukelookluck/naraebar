from rest_framework import serializers
from .models import Article, Comment
from accounts.models import User

from django.core import serializers as sz


class ArticleSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = '__all__'
        read_only_fields = ('user', 'DISLIKE', 'LIKE')

    def get_comments(self, obj):
        comments = obj.comments.filter(parent=None)  # 답글인 거는 제외
        serializer = CommentSerializer(instance=comments, many=True)
        return serializer.data

        # return sz.serialize('json', obj.comments.all(), ensure_ascii=False)


class CommentSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    replys = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('user', 'article')

    def get_username(self, obj):
        return obj.user.username

    def get_replys(self, obj):
        replys = obj.replys.all()
        serializer = CommentSerializer(instance=replys, many=True)
        return serializer.data
