# Generated by Django 5.1.6 on 2025-03-13 06:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("webapp", "0003_project"),
    ]

    operations = [
        migrations.CreateModel(
            name="Testimonial",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "image",
                    models.ImageField(default="default.jpg", upload_to="testimonials/"),
                ),
                ("rating", models.IntegerField(default=5)),
                ("quote", models.CharField(max_length=255)),
                ("text", models.TextField()),
            ],
        ),
    ]
