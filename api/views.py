from rest_framework.response import Response
from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
from api import serializers

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    return Response('Our Api')

# This view gets us all the notes available inside the 'Notes' model
@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

# This view is for creating the new note
@api_view(['POST'])
def createNote(request):
    data = request.data
    note = Note.objects.create(
        body = data['body']
    )
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

# This view gets the 'note' associated with certain primary key
@api_view(['GET'])
def getNote(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

# This view is for updating the notes
@api_view(['PUT'])
def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE','POST','GET'])
def deleteNote(request, pk):
    if request.method == 'DELETE':
        note = Note.objects.get(id=pk)
        print("delete route reached")
        note.delete()
        return Response('Note was deleted!')