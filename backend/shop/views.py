from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .products import products


@api_view(['GET'])
def get_routes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/<id>/review/',
        '/api/products/top/',
        '/api/products/<id>/',
        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',
    ]
    return Response(routes)


@api_view(['GET'])
def get_products(request):
    return Response(products)


@api_view(['GET'])
def get_product(request, pk):
    product = None
    for item in products:
        if item['_id'] == pk:
            product = item
            break
    return Response(product)