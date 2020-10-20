from django.contrib import admin
from .models import School
from .models import TransferCourse
from .models import Approver
from .models import Major_requirement
from .models import Major
from .models import Transferevaluation

admin.site.register(School)
admin.site.register(TransferCourse)
admin.site.register(Approver)
admin.site.register(Major_requirement)
admin.site.register(Major)
admin.site.register(Transferevaluation)
