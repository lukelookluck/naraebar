# Generated by Django 2.1.15 on 2020-08-13 02:35

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bottle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('nozzle', models.PositiveIntegerField(default=1, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(4)])),
                ('inserted_at', models.DateTimeField(auto_now_add=True)),
                ('capacity', models.IntegerField()),
                ('strAlcoholic', models.BooleanField(default='true')),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('idDrink', models.IntegerField(default=9999)),
                ('strDrink', models.CharField(max_length=100)),
                ('strInstructions', models.TextField(max_length=300)),
                ('strAlcoholic', models.BooleanField(default='true')),
                ('strIngredient1', models.CharField(default='null', max_length=100)),
                ('strMeasure1', models.PositiveIntegerField(default='0')),
                ('strIngredient2', models.CharField(default='null', max_length=100)),
                ('strMeasure2', models.PositiveIntegerField(default='0')),
                ('strIngredient3', models.CharField(default='null', max_length=100)),
                ('strMeasure3', models.PositiveIntegerField(default='0')),
                ('strIngredient4', models.CharField(default='null', max_length=100)),
                ('strMeasure4', models.PositiveIntegerField(default='0')),
                ('strIngredient5', models.CharField(default='null', max_length=100)),
                ('strMeasure5', models.PositiveIntegerField(default='0')),
                ('strIngredient6', models.CharField(default='null', max_length=100)),
                ('strMeasure6', models.PositiveIntegerField(default='0')),
                ('strDrinkThumb', models.URLField(default='null')),
            ],
        ),
    ]
