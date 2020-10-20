from rest_framework import serializers
from transfer.models import School


class schoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'
