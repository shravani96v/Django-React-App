from django.urls import path
from .views.approver_views import *
from .views.major_views import *
from .views.transfer_course_views import *
from .views.load import *


urlpatterns = [
    path('approver-list/', approver_view, name='approver_home'),
    path('approver/<int:approver_id>/', approver_detail, name='approver_detail'),
    path('load-data/', import_file, name='import'),
    path('major-list/', major_view, name='major_home'),
    path('major/<int:major_id>/', major_detail, name='major_detail'),
    path('transfer-course-list/', transfer_course_view, name='transfer_course_home'),
    path('transfer-course/<int:transfer_course_id>/', transfer_course_detail, name='approver_detail'),
]
