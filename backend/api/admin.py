from django.contrib import admin
from .models import Item

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ('description', 'name', 'place', 'is_found', 'created_at')
    list_filter = ('is_found',)
    search_fields = ('description', 'name', 'place')