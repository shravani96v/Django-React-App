from rest_framework import serializers
from transfer.models import Transferevaluation


class transferEvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transferevaluation
        fields = '__all__'
