from django.shortcuts import render

from .models import Bottle, Recipe
from .serializers import BottleSerializer, RecipeSerializer

from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from django.db.models import Max
from django.http import JsonResponse

import random
import serial


class recipeViewset(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    # permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'])
    def random(self, request, pk=None):
        max_id = Recipe.objects.all().aggregate(max_id=Max("id"))['max_id']
        if max_id is None:
            return Response({"recipe_error": "No recipe!"})

        pk = random.randint(1, max_id)
        random_recipe = Recipe.objects.get(pk=pk)
        serializer = self.get_serializer(random_recipe)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def make_cocktail(self, pk):
        # ser = serial.Serial('/dev/ttyAMA0', 9600)
        # ser = serial.Serial()
        # ser.port = '/dev/ttyAMA0'
        # ser.baudrate = 9600

        ser_data = '$,MAKE,'
        cocktail_recipe = Recipe.objects.get(pk=pk)
        for i in range(1, 7):
            key_Ingredient = 'strIngredient' + str(i)
            key_Measure = 'strMeasure' + str(i)

            ingredient = getattr(cocktail_recipe, key_Ingredient)

            if ingredient != 'null':
                bottle = Bottle.objects.get(name=ingredient)
                ser_data += (str(bottle.nozzle) + ',' +
                             str(getattr(cocktail_recipe, key_Measure)))

        ser_data += ',&'
        # ser.write(ser_data.encode())
        # print(ser_data)

        # receive_data = ser.readline()
        # print(receive_data)

        return JsonResponse({'data': ser_data})


class bottleViewset(viewsets.ModelViewSet):
    queryset = Bottle.objects.all()
    serializer_class = BottleSerializer
    # permission_classes = [IsAuthenticated]
