from rest_framework import serializers

from .models import Person

class PersonSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Person
    fields = ('name', 'title', 'era', 'picture', 'allegiance', 'bio', 'wiki')