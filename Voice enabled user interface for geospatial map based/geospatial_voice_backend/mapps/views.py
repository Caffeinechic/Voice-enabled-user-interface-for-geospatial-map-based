# maps/views.py

from rest_framework import generics
from .models import Location
from .serializers import LocationSerializer
from django.http import HttpResponse

def index(request):
    return HttpResponse("Welcome to the Geospatial Voice-Enabled Application!")


class LocationList(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class LocationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer