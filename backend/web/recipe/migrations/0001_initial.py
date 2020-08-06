# Generated by Django 2.1.15 on 2020-08-06 05:11

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('volume_ml', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='IngredientCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('is_alcohol', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=50)),
                ('content', models.CharField(max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('uploaded_at', models.DateTimeField(auto_now=True)),
                ('rating', models.IntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
                ('daily_ranking', models.IntegerField(default=999)),
                ('weekly_ranking', models.IntegerField(default=999)),
                ('monthly_ranking', models.IntegerField(default=999)),
                ('like_users', models.ManyToManyField(related_name='like_recipe_users', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='ingredient',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='recipe.IngredientCategory'),
        ),
        migrations.AddField(
            model_name='ingredient',
            name='recipes',
            field=models.ManyToManyField(to='recipe.Recipe'),
        ),
    ]
