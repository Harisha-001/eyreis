# Generated by Django 5.1.6 on 2025-03-28 10:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("webapp", "0020_proj_delete_projectdetails"),
    ]

    operations = [
        migrations.AddField(
            model_name="proj",
            name="name",
            field=models.CharField(default="TEST", max_length=50),
        ),
    ]
