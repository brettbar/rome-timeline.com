from django.shortcuts import render


from rest_framework import viewsets
from .serializers import PersonSerializer
from .models import Person

# Create your views here.

class PersonViewSet(viewsets.ModelViewSet):
  queryset = Person.objects.all().order_by('pk')
  serializer_class = PersonSerializer
  # permission_classes = [IsPersonAdminOrReadOnly]

  # def get_permissions(self):
  #   return super().get_permissions()

  # def get_queryset(self):
  #   return Person.objects.all()

  # def create(self, request):
  #   pass

  # def retrieve(self, request, pk=None):
  #   pass

  # def update(self, request, pk=None):
  #   pass

  # def partial_update(self, request, pk=None):
  #   pass

  # def destroy(self, request, pk=None):
  #   pass
