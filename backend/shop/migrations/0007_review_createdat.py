# Generated by Django 3.2.3 on 2021-06-07 14:06

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0006_alter_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2021, 6, 7, 14, 6, 55, 373664, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
