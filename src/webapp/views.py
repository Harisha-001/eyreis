from django.shortcuts import render
from .models import *
# Create your views here.


def home(request):  
    projects = Project.objects.all()  
    testimonials = Testimonials.objects.all()
    images = BannerImage.objects.all()
    services = Service.objects.all() 

    context = {
     
        'projects': projects,
        'testimonials':testimonials,
        'images':images,
        'services': services
    }

    return render(request, 'index.html', context)
    # This function will render the 'home.html' template when the homepage is accessed.  


def about(request):
    team_members = TeamMember.objects.all()

    context = {

        'team_members': team_members
    }

    return render(request, 'about.html',context)

def Contact(request):
    return render(request, 'contact.html')

def event(request):
    return render(request, 'event.html')

def buildyourProduct(request):
    return render(request, 'buildyourproduct.html')

def reserveYourBuild(request):
    return render(request, 'reserveYourBuild.html')

def inventory(request):
    proj = Proj.objects.all() 

    context ={

        'proj': proj
    }
    return render(request, 'inventory.html',context)

def testimonials_view(request):
    testimonials = Testimonials.objects.all()
    return render(request, 'index.html', {'testimonials': testimonials})

def blog_list(request):
  
    blog_posts = BlogPost.objects.all()

    return render(request, 'blog.html', {'blog_posts': blog_posts})

def product1(request):
    images = GalleryImage.objects.all()  
    banners = BannerImagesProducts.objects.all()
    carousel_images = CarouselImage.objects.all()
    testimonials = Testimonials.objects.all()
    
    
    context ={

        'images': images,
        'banners': banners,
        'carousel_images': carousel_images,
        'testimonials': testimonials
        
    }

    return render(request,'product1.html',context)

def product2(request):
    images = GalleryImage.objects.all()  
    banners = BannerImagesProducts.objects.all()
    carousel_images = CarouselImage.objects.all()
    testimonials = Testimonials.objects.all()
    
    context ={

        'images': images,
        'banners': banners,
        'carousel_images': carousel_images,
        'testimonials': testimonials
        
    }

    return render(request,'product2.html',context)

def product3(request):
    images = GalleryImage.objects.all()  
    banners = BannerImagesProducts.objects.all()
    carousel_images = CarouselImage.objects.all()
    testimonials = Testimonials.objects.all()

    
    context ={

        'images': images,
        'banners': banners,
        'carousel_images': carousel_images,
        'testimonials': testimonials
        
    }

    return render(request,'product3.html',context)

# def contact_view(request):
#     if request.method == "POST":
#         name = request.POST.get("name")
#         phone = request.POST.get("phone")
#         email = request.POST.get("email")
#         subject = "New Contact Form Submission"
#         message = request.POST.get("message")

#         email_message = f"Name: {name}\nPhone: {phone}\nEmail: {email}\n\nMessage:\n{message}"

#         try:
#             send_mail(
#                 subject,  # Email subject
#                 email_message,  # Email body
#                 "your-email@gmail.com",  # Sender email
#                 ["recipient-email@example.com"],  # Replace with the recipient's email
#                 fail_silently=False,
#             )
#             messages.success(request, "Your message has been sent successfully!")
#         except Exception as e:
#             messages.error(request, "Failed to send message. Please try again later.")

#         return redirect("contact")  # Redirect to the contact page

#     return render(request, "contact.html")


