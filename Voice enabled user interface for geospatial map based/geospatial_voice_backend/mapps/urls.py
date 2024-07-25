# maps/urls.py

from django.urls import path
from mapps.views import LocationList, LocationDetail

urlpatterns = [
    path('locations/', LocationList.as_view(), name='location-list'),
    path('locations/<int:pk>/', LocationDetail.as_view(), name='location-detail'),
]