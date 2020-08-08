from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token, refresh_jwt_token
from .views import validate_jwt_token, current_user, UserList

urlpatterns = [
    path('validate/', validate_jwt_token),
    path('login/', obtain_jwt_token),

    path('verify/', verify_jwt_token),
    path('refresh/', refresh_jwt_token),

    path('user/', UserList.as_view()),
    path('user/current', current_user),
]
