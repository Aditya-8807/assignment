from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=100)
    place = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    is_found = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.description} - {'Found' if self.is_found else 'Lost'}"