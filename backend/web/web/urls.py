from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    # path('', TemplateView.as_view(template_name='index.html'),
    #      name='index'),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('admin/', admin.site.urls),

    path('community/', include('community.urls')),
    path('accounts/', include('accounts.urls')),
    path('recipe/', include('recipe.urls')),
    re_path(r'.*', TemplateView.as_view(template_name='index.html'), name='index'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
