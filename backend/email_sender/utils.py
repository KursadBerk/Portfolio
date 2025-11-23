

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
        <p>{message}</p>
        <p>Phone: {phone}</p>
    """

    sender = settings.DEFAULT_FROM_EMAIL
    receiver = [settings.DEFAULT_FROM_EMAIL]

    send_mail(
        subject,
        "",  # plain text body (optional)
        sender,
        receiver,
        html_message=message,
        fail_silently=False,
    )
