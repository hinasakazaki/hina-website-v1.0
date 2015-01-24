from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.views import generic
from django.template import RequestContext, loader

def index(request):
	template = loader.get_template("index.html")
	context = RequestContext(request, {})
	return HttpResponse(template.render(context))

def comix(request):
	template = loader.get_template("comix.html")
	context = RequestContext(request, {})
	return HttpResponse(template.render(context))

def projects(request):
	template = loader.get_template("projects.html")
	context = RequestContext(request, {})
	return HttpResponse(template.render(context))


def fotos(request):
	template = loader.get_template("fotos.html")
	context = RequestContext(request, {})
	return HttpResponse(template.render(context))

def contact(request):
	template = loader.get_template("contact.html")
	context = RequestContext(request, {})
	return HttpResponse(template.render(context))

def index(request):
	template = loader.get_template("index.html")
	context = RequestContext(request, {})
	return HttpResponse(template.render(context))
