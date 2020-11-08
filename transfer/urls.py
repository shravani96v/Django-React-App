from django.urls import path
from .views.approver_views import *
from .views.major_views import *
from .views.transfer_course_views import *
from .views.load import *
from .views.major_requirement_views import *
from .views.school_views import *
from .views.remove_data import *


urlpatterns = [
    path('approver-list/', approver_view, name='approver_home'),
    path('approver/<int:approver_id>/', approver_detail, name='approver_detail'),
    path('load-data/', import_file, name='import'),
    path('remove-data/', remove_all_data, name='remove_data'),
    path('major-list/', major_view, name='major_home'),
    path('major/<int:major_id>/', major_detail, name='major_detail'),
    path('school-list/', school_view),
    path('school/<int:school_id>/', school_detail),
    path('transfer-course-list/', transfer_course_view),
    path('transfer-course/<int:transfer_course_id>/', transfer_course_detail),
    path('major-requirement-list/', major_requirement_view),
    path('major-requirement/<int:major_req_id>/', major_requirement_detail),
]
