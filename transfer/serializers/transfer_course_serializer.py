from rest_framework import serializers
from transfer.models import TransferCourse


class transferCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransferCourse
        fields = '__all__'
