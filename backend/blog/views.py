from django.shortcuts import render, redirect
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from blog.models import BlogCategory, BlogPost
from blog.serializers import BlogCategorySerializer, BlogPostSerializer



class BlogCategoryListView(ListAPIView):
    queryset = BlogCategory.objects.order_by('name')
    serializer_class = BlogCategorySerializer
    lookup_field = 'name'
    permission_classes = (permissions.AllowAny, )

class BlogCategoryDetailView(RetrieveAPIView):
    queryset = BlogCategory.objects.order_by('-name')
    serializer_class = BlogCategorySerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class BlogPostListView(ListAPIView):
    queryset = BlogPost.objects.order_by('-date_created')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class BlogPostDetailView(RetrieveAPIView):
    queryset = BlogPost.objects.order_by('-date_created')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class BlogPostFeaturedView(ListAPIView):
    queryset = BlogPost.objects.all().filter(featured=True)
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class BlogPostCategoryView(APIView):
    serializer_class = BlogPostSerializer
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        category = data['category']
        queryset = BlogPost.objects.order_by('-date_created').filter(category__iexact=category)

        serializer = BlogPostSerializer(queryset, many=True)

        return Response(serializer.data)

# def index(request):
#     blog_posts = BlogPost.objects.all()
#     for blog in blog_posts:
#         print(blog.title)
# 
#     args = {
#         "blog_posts" : blog_posts
#     }
#     return render(request, 'blog_index.html', args)




