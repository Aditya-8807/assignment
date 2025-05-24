from django.urls import path
from .views import FoundItemListCreateView

urlpatterns = [
    path('api/found-items/', FoundItemListCreateView.as_view(), name='found-items'),
]
