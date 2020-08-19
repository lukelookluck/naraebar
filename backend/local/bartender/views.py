from django.shortcuts import render

from .models import Bottle, Recipe
from .serializers import BottleSerializer, RecipeSerializer

from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from django.db.models import Max
import random
import serial


class recipeViewset(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    # permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'])
    def random(self, request, pk=None):
        max_id = Recipe.objects.all().aggregate(max_id=Max("id"))['max_id']
        pk = random.randint(1, max_id)
        random_recipe = Recipe.objects.get(pk=pk)
        serializer = self.get_serializer(random_recipe)
        return Response(serializer.data)

    @action(detail=False, methods=['post'])
    def make_cocktail(self, request, pk=None):
        cocktail_id = 1

        ser = serial.Serial()
        ser.port = '/dev/ttyAMA0'
        ser.baudrate = 9600

        ser.open()

        print("in while")
        ser.write('$,MAKE,1,180,3,350,&'.encode())
        print('write ok')

        receive_data = ser.readline()
        print(receive_data)

        print('read ok!')
        # time.sleep(1)

        ser.close()


class bottleViewset(viewsets.ModelViewSet):
    queryset = Bottle.objects.all()
    serializer_class = BottleSerializer
    permission_classes = [IsAuthenticated]
