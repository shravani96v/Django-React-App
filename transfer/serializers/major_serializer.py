from rest_framework import serializers
from transfer.models import Major


class majorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Major
        fields = '__all__'
