from rest_framework import status
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer
from .serializers import UserSerializer, UserSerializerWithToken
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import permissions, status
# from django.contrib.auth.models import User
from .models import User
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.shortcuts import render, redirect, get_object_or_404

from django.contrib.auth import get_user_model
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.decorators import login_required

from django.contrib.auth.forms import AuthenticationForm
from .forms import CustomUserCreationForm


# def signup(request):
#     if request.method == 'POST':
#         signup_form = CustomUserCreationForm(request.POST)
#         if signup_form.is_valid():
#             user = signup_form.save()
#             auth_login(request, user)
#             return redirect('#')

#     else:
#         form = CustomUserCreationForm()

#     context = {
#         'form': form,
#     }

#     return render(request, 'accounts/form.html', context)


# def login(request):
#     if request.method == 'POST':
#         form = AuthenticationForm(request, request.POST)
#         if form.is_valid():
#             auth_login(request, form.get_user())
#             return redirect('#')
#     else:
#         form = AuthenticationForm()
#     context = {
#         'form': form,
#     }
#     return render(request, 'accounts/form.html', context)


# @login_required
# def logout(request):
#     auth_logout(request)
#     return redirect('#')


# from google.oauth2 import id_token
# from google.auth.transport import requests


@api_view(['GET'])
def current_user(request):

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# from ./user/serializers import UserSerializer


@api_view(['GET'])
def validate_jwt_token(request):

    try:
        token = request.META['HTTP_AUTHORIZATION']
        data = {'token': token.split()[1]}
        valid_data = VerifyJSONWebTokenSerializer().validate(data)
    except Exception as e:
        return Response(e)

    return Response(status=status.HTTP_200_OK)
