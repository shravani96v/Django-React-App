# Generated by Django 3.1.1 on 2020-09-30 04:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Approver',
            fields=[
                ('approver_id', models.AutoField(primary_key=True, serialize=False)),
                ('approver_name', models.CharField(blank=True, max_length=200, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Major',
            fields=[
                ('major_id', models.AutoField(primary_key=True, serialize=False)),
                ('major_name', models.CharField(default=None, max_length=200, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Major_requirement',
            fields=[
                ('major_req_id', models.AutoField(primary_key=True, serialize=False)),
                ('description', models.CharField(default=None, max_length=200)),
                ('major_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='transfer.major')),
            ],
            options={
                'unique_together': {('major_id', 'description')},
            },
        ),
        migrations.CreateModel(
            name='School',
            fields=[
                ('school_id', models.AutoField(primary_key=True, serialize=False)),
                ('school_name', models.CharField(max_length=100, unique=True)),
                ('state_name', models.CharField(max_length=10, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='TransferCourse',
            fields=[
                ('transfer_course_id', models.AutoField(primary_key=True, serialize=False)),
                ('subject_number', models.CharField(blank=True, max_length=200, null=True)),
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('school_id', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='transfer.school')),
            ],
            options={
                'unique_together': {('school_id', 'subject_number')},
            },
        ),
        migrations.CreateModel(
            name='Transferevaluation',
            fields=[
                ('transfer_eval_id', models.AutoField(primary_key=True, serialize=False)),
                ('sem_year_taken', models.CharField(blank=True, max_length=8, null=True)),
                ('expiration_date', models.DateField(blank=True, null=True)),
                ('approved_status', models.CharField(blank=True, max_length=1, null=True)),
                ('notes', models.CharField(blank=True, max_length=150, null=True)),
                ('approver_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='transfer.approver')),
                ('major_req_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='transfer.major_requirement')),
                ('transfer_course_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='transfer.transfercourse')),
            ],
            options={
                'unique_together': {('transfer_course_id', 'major_req_id', 'sem_year_taken')},
            },
        ),
    ]
