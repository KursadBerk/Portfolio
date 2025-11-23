from rest_framework import serializers
from .models import ReceivedEmail

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReceivedEmail
        fields = ['firstname', 'lastname', 'email', 'phone', 'service', 'message']

       