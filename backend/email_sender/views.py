from django.shortcuts import render

# Create your views here.
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactMessageSerializer
from .utils import send_email_to_me
from django.conf import settings

class ContactMessageView(GenericAPIView):
    serializer_class = ContactMessageSerializer
    def post(self, request):
        user_data = request.data
        serializer = self.serializer_class(data= user_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            user = serializer.data
            firstname =  user["firstname"]
            lastname = user["lastname"]
            email = user["email"]
            phone = user["phone"]
            service = user["service"]
            message = user["message"]

            send_email_to_me(firstname=firstname, lastname=lastname, email=email, phone=phone, service=service, message=message)
            return Response({
                'data': user,
                'message': f'Your mail sent successfuly {firstname}.'
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)