from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser)


class User(AbstractUser):
    pass
