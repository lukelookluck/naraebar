# Generated by Django 2.1.15 on 2020-08-13 14:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0002_auto_20200813_2300'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='image',
            field=models.ImageField(blank=True, upload_to='media/%Y/%m/%d'),
        ),
    ]
