"""
URL configuration for geospatial_voice_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# # geospatial_voice_backend/urls.py

# from django.contrib import admin
# from django.urls import path, include
# from mapps.views import index  # Import the new view

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/', include('mapps.urls')),
#     path('', index),  # Add this line to handle the root URL
# ]

# =======================================================================================
# geospatial_voice_backend/urls.py

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from mapps.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('mapps.urls')),
    path('', index),
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])




