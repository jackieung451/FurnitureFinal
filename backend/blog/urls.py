from django.urls import path
from . import views

from .views import BlogCategoryListView, BlogCategoryDetailView
from .views import BlogPostListView, BlogPostDetailView, BlogPostFeaturedView, BlogPostCategoryView

app_name = 'blog'

# order matters, backslash matters, learned the hard way
urlpatterns = [
    path('', BlogPostListView.as_view()),

    # category model
    path('categories/', BlogCategoryListView.as_view()),
    path('categories/<slug:slug>/', BlogCategoryDetailView.as_view()),

    # blog model
    path('featured/', BlogPostFeaturedView.as_view()),
    path('category/', BlogPostCategoryView.as_view()),
    path('<slug:slug>/', BlogPostDetailView.as_view()),
]