# This is where we create our database model

from django.db import models

# Create your models here.

class Note(models.Model):
    body = models.TextField(null=True, blank=True)

    # auto_now will take effect whenver the instance is updated
    updated = models.DateTimeField(auto_now=True)

    # auto_now_add will only take effect when the instance is first created
    created = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return self.body[0:50]