from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
# from django.contrib.auth.models import User
from .models import User
from community.models import Article
from community.serializers import ArticleSerializer


class UserSerializer(serializers.ModelSerializer):
    save_articles = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'save_articles')

    def get_save_articles(self, obj):
        save_articles = obj.save_articles.all()
        serializer = ArticleSerializer(instance=save_articles, many=True)
        return serializer.data


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username',
                  'first_name', 'last_name',
                  'email', 'password')
