from django.db import models

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.core.validators import RegexValidator
from django.core.validators import MinLengthValidator

# Create a custom validator for the allowed characters (letters, numbers, underscores, and dots)
name_validator = RegexValidator(
    regex=r'^[A-Za-zÇçĞğİıÖöŞşÜü0-9_.\s]+$',
    message='Only letters, numbers, underscores, and dots are allowed.',
)

# Create your models here.
class ReceivedEmail(AbstractBaseUser):
    email = models.EmailField(max_length=100, verbose_name= ("Email Address"), unique=False )
    firstname = models.CharField(max_length=100, validators=[name_validator], verbose_name=_("First Name"))
    lastname = models.CharField(max_length=100, validators=[name_validator], verbose_name=_("Last Name"))
    phone = models.CharField(max_length=15, blank=True, null=True)  # Optional

    SERVICE_CHOICES = [
        ('frntend', 'Frontend Development'),
        ('bckend', 'Backend Development'),
        ('iot', 'Web Server/IOT'),
        ('embedded', 'Embedded System Design'),
        ('other', 'Other'),
    ]


    service = models.CharField(max_length=10, choices=SERVICE_CHOICES)
    message =  message = models.TextField(MinLengthValidator(10, message="Message must be at least 10 characters"))


    def __str__(self):
        return f"{self.firstname} {self.lastname} {self.phone} {self.service}"