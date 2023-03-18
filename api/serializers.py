from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from . import views

class NoteSerializer(ModelSerializer):
    class Meta:
        model = views.Note
        fields = '__all__'


