# Generated by Django 2.1.15 on 2020-08-11 01:13

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('community', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='DISLIKE',
        ),
        migrations.AddField(
            model_name='comment',
            name='LIKE',
            field=models.ManyToManyField(blank=True, related_name='comment_articles', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='article',
            name='LIKE',
            field=models.ManyToManyField(blank=True, related_name='like_articles', to=settings.AUTH_USER_MODEL),
        ),
    ]