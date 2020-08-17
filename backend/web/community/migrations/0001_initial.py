# Generated by Django 3.1 on 2020-08-17 08:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20)),
                ('detail', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('drink_name', models.CharField(max_length=20)),
                ('image', models.ImageField(blank=True, upload_to='%Y/%m/%d')),
                ('ingredient1', models.CharField(blank=True, max_length=30, null=True)),
                ('ingredient2', models.CharField(blank=True, max_length=30, null=True)),
                ('ingredient3', models.CharField(blank=True, max_length=30, null=True)),
                ('ingredient4', models.CharField(blank=True, max_length=30, null=True)),
                ('ingredient5', models.CharField(blank=True, max_length=30, null=True)),
                ('ingredient6', models.CharField(blank=True, max_length=30, null=True)),
                ('measure1', models.CharField(blank=True, max_length=30, null=True)),
                ('measure2', models.CharField(blank=True, max_length=30, null=True)),
                ('measure3', models.CharField(blank=True, max_length=30, null=True)),
                ('measure4', models.CharField(blank=True, max_length=30, null=True)),
                ('measure5', models.CharField(blank=True, max_length=30, null=True)),
                ('measure6', models.CharField(blank=True, max_length=30, null=True)),
                ('LIKE', models.ManyToManyField(blank=True, related_name='like_articles', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='articles', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('LIKE', models.ManyToManyField(blank=True, related_name='comment_articles', to=settings.AUTH_USER_MODEL)),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='community.article')),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='replys', to='community.comment')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_comments', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
