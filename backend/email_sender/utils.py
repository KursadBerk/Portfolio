

from django.core.mail import send_mail
from django.conf import settings
from .models import ReceivedEmail
import json



def send_email_to_me(firstname, lastname, service, email, message, phone):
    
    

    subject = "You have a new Job!"

    message = f"""

        <p>Client: {firstname} {lastname}, </p>
        <p>Job Type : {service} </p>
        <p>Client email: {email} </p>
        <p> {message} </p>
        <p>Phone: {phone} </p>
        

    """
    sender = settings.EMAIL_HOST_USER
    receiver = [str(settings.EMAIL_HOST_USER)]

    send_mail(
        subject,
        "",
        sender,
        receiver,
        html_message=message,  # Use HTML for better formatting
        fail_silently=False,
    )