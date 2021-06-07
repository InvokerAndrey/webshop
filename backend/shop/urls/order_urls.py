from django.urls import path

from shop.views import order_views as views


urlpatterns = [
    path('add/', views.add_order_items, name='order-add'),
    path('myorders/', views.get_my_orders, name='my-orders'),
    path('', views.get_orders, name='orders'),

    path('<str:pk>/', views.get_order_by_id, name='order-get'),
    path('<str:pk>/pay/', views.update_order_to_paid, name='order-pay'),
    path('<str:pk>/deliver/', views.update_order_to_delivered, name='order-deliver'),
]