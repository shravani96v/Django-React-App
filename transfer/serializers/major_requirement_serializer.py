from rest_framework import serializers
from transfer.models import MajorRequirement


class majorRequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = MajorRequirement
        fields = ['major_req_id', 'description', 'major_id', 'major']
