from django.urls import include, path
from . import views

app_name = 'api'
urlpatterns = [
    path('', views.index, name = 'api_index'),
    path('blog/', include('blog.urls', namespace='blog')),
]