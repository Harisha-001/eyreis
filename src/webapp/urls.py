from django.urls import path , include
from . import views
from django.urls import path,include

urlpatterns=[

    path('', views.home, name="home"),
    path('about/', views.about, name="about"),
    path('event/', views.event, name="event"),
    path('contact/', views.Contact, name="Contact"),
    path('buildyourProduct/',views.buildyourProduct, name="buildyourProduct"),
    path('reserveYourBuild/',views.reserveYourBuild, name="reserveYourBuild"),
    path('blog/', views.blog_list, name='blog'),
    path('inventory/', views.inventory, name="inventory"),
    path('product1/', views.product1, name="product1"),
    path('product2/', views.product2, name="product2"),
    path('product3/', views.product3, name="product3"),

    # path('contact/', views.contact_view, name="Contact"),

]