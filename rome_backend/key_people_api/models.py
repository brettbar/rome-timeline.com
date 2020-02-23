from django.db import models

# Create your models here.

class Person(models.Model):
  name = models.CharField(max_length=60)
  title = models.CharField(max_length=60)
  era = models.CharField(max_length=60)
  picture = models.TextField()  
  allegiance = models.CharField(max_length=60)
  bio = models.TextField()
  wiki = models.TextField()

  def __str__(self):
    return self.name
