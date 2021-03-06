# Generated by Django 3.0.3 on 2020-02-23 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('key_people_api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='person',
            old_name='pic_url',
            new_name='picture',
        ),
        migrations.RenameField(
            model_name='person',
            old_name='sub_text',
            new_name='title',
        ),
        migrations.AddField(
            model_name='person',
            name='allegiance',
            field=models.CharField(default=5, max_length=60),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='person',
            name='wiki',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
