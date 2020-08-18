from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser)


class User(AbstractUser):
    pass


class User(AbstractUser):
    email = models.EmailField(
        verbose_name="email",
        max_length=255,
        unique=True,
    )

    community_points = models.IntegerField(default=0)
    community_badge = models.ImageField()

    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email

        @property
        def is_staff(self):
            return self.is_admin
