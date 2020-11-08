
from django.db import models
from .model_transfer_course import TransferCourse
from .model_major_requirement import MajorRequirement
from .model_approver import Approver


class Transferevaluation(models.Model):
    transfer_eval_id = models.AutoField(primary_key=True)
    transfer_course_id = models.ForeignKey(TransferCourse, on_delete=models.CASCADE)
    major_req_id = models.ForeignKey(MajorRequirement, on_delete=models.CASCADE)
    sem_year_taken = models.CharField(max_length=8, blank=True, null=True)
    expiration_date = models.DateField(blank=True, null=True)  # It must be in YYYY-MM-DD format
    approved_status = models.CharField(max_length=1, blank=True, null=True)
    notes = models.CharField(max_length=150, blank=True, null=True)
    approver_id = models.ForeignKey(Approver, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('transfer_course_id', 'major_req_id', 'sem_year_taken')
