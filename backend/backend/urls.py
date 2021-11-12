from django.contrib import admin
from django.urls import path, include, re_path
# from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles import views


admin.site.site_header = "LA Nayarit Furniture Admin"
admin.site.site_title = "LA Nayarit Furniture Admin Portal"
admin.site.index_title = "Welcome to the LA Nayarit Furniture Admin Portal"

urlpatterns = [
    #Admin
    path('admin/', admin.site.urls),
    path('summernote/', include('django_summernote.urls')),

    # API
    path('api/', include('api.urls', namespace='api')),

    #path('login/', LoginView.as_view(), name='login'),
    #path('logout/', LogoutView.as_view()),
    # path('', TemplateView.as_view(template_name="index.html")),
    # login_url='login')),
    # re_path(r'^(?:.*)/?$', TemplateView.as_view(template_name="index.html")),

]

if settings.DEBUG:
    # Dev-only Serve
    urlpatterns += static('/static_root/', document_root=settings.STATIC_ROOT)
    urlpatterns += static('/media/', document_root=settings.MEDIA_ROOT)

# urlpatterns = [
#     path('api-auth/', include('rest_framework.urls')),
#
#     path('summernote/', include('django_summernote.urls')),
#     path('api/blog/', include('blog.urls')),
#     path('admin/', admin.site.urls),
#
# ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
