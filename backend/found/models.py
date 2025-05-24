from django.db import models
from django.utils import timezone

class FoundItem(models.Model):
    finder_name = models.CharField(max_length=100)
    found_place = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='found_images/', blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.finder_name} - {self.found_place}'