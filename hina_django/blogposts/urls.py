from django.conf.urls import patterns, url

from blogposts import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
)