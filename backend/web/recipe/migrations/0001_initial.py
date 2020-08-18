# Generated by Django 3.1 on 2020-08-18 08:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
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
                ('imgDrink', models.ImageField(blank='true', upload_to='image/bartender')),
            ],
        ),
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('volume_ml', models.IntegerField(default=0)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='recipe.ingredientcategory')),
                ('recipes', models.ManyToManyField(to='recipe.Recipe')),
            ],
        ),
    ]
