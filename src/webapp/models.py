from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=255)  
    description = models.TextField()  
    image = models.ImageField(upload_to='projects/') 
    uploaded_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return self.title


class BannerImage(models.Model):
    image = models.ImageField(upload_to="banners/")
 
    def __str__(self):
        return self.image.url



class Service(models.Model):
    
    image = models.ImageField(upload_to='services/')  



class Testimonials(models.Model):
    image = models.ImageField(upload_to='testimonials/', default='default.jpg')
    rating = models.IntegerField(default=5)  # Rating out of 5
    quote = models.CharField(max_length=255)
    text = models.TextField()

    def __str__(self):
        return self.quote

class TeamMember(models.Model):
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    image = models.ImageField(upload_to='team/')
    discord_link = models.URLField(blank=True, null=True)
    linkedin_link = models.URLField(blank=True, null=True)
    facebook_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name


class TestimonialFeedback1(models.Model):
    name = models.CharField(max_length=255)
    designation = models.CharField(max_length=255)
    feedback = models.TextField()
    image = models.ImageField(upload_to='testimonials/')  # Upload images to /media/testimonials
    rating = models.IntegerField(default=5)  # Rating out of 5

    def __str__(self):
        return self.name


class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='blog_images/', default='default.jpg')  # Stores images in a folder called 'blog_images'
    article_url = models.URLField()
    
    def __str__(self):
        return self.title


class Proj(models.Model):
    image = models.ImageField(upload_to='van_images/')  # Field for storing image
    details = models.CharField(max_length=17)
    location = models.CharField(max_length=50)
    name = models.CharField(max_length=50, default='TEST')

    def __str__(self):
        return f"{self.details}"

class GalleryImage(models.Model):
    image = models.ImageField(upload_to='gallery_images/')
    alt_text = models.CharField(max_length=255)

    def __str__(self):
        return self.alt_text


class BannerImagesProducts(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=200, blank=True)
    image = models.ImageField(upload_to='banners/')
    
    def __str__(self):
        return self.title

class CarouselImage(models.Model):
    image = models.ImageField(upload_to='carousel_images/')
    alt_text = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f"Carousel Image {self.id}"






