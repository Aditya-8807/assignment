from rest_framework.generics import ListCreateAPIView
from .models import FoundItem
from .serializers import FoundItemSerializer

class FoundItemListCreateView(ListCreateAPIView):
    queryset = FoundItem.objects.all().order_by('-created_at')
    serializer_class = FoundItemSerializer