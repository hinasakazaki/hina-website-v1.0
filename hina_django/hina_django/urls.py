from django.conf.urls import patterns, include, url
from django.contrib import admin
from hina_django import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'hina_django.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
 	url(r'^index/', views.index),
    url(r'^comix/', views.comix),
    url(r'^projects/', views.projects),
    url(r'^contact/', views.contact),
    # url(r'^admin/', view),

    # url(r'^index/', include('index.urls')),
    # url(r'^blog/', include('blogposts.urls')),
    # url(r'^comix/', include ('comix.urls')),
    # url(r'^projects/', include ('projects.urls')),
    # url(r'^contact/', include ('contact.urls')),
    # url(r'^admin/', include(admin.site.urls)),
)
