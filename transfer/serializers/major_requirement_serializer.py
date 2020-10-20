from rest_framework import serializers
from transfer.models import Major_requirement


class majorRequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Major_requirement
        fields = '__all__'
