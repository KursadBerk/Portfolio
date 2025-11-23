from django.contrib import admin
from .models import ReceivedEmail
# Register your models here.
class ReceivedEmailAdmin(admin.ModelAdmin):
    # Customize the admin list view
    list_display = ('firstname', 'lastname', 'email', 'service', 'message')
    list_filter = ('service',)  # Add a filter sidebar for the service field
    search_fields = ('firstname', 'lastname', 'email', 'message')  # Add a search bar
    ordering = ('-id',)  # Order by newest messages first

    # Optional: Add read-only fields (e.g., for data integrity)
    readonly_fields = ('firstname', 'lastname', 'email', 'service', 'message', 'phone')

# Register the model with the custom admin
admin.site.register(ReceivedEmail, ReceivedEmailAdmin)