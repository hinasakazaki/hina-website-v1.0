from django.contrib import admin
from blogposts.models import BlogPost



class PostAdmin(admin.ModelAdmin):
	fieldsets = [(None, {'fields': ['post_text']}),('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),]
	list_filter=['pub_date']
	search_fields = ['post_text']
admin.site.register(BlogPost, PostAdmin)
# Register your models here.
