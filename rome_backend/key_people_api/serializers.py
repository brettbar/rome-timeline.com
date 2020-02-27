from rest_framework import serializers

from .models import Person

class PersonSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Person
    fields = ('order', 'name', 'title', 'era', 'picture', 'allegiance', 'bio', 'wiki')