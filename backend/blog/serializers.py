from rest_framework import serializers
from .models import BlogCategory, BlogPost

class BlogCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCategory
        fields = '__all__'
        lookup_field = 'name' 

class BlogPostSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(many=False)
    tags = serializers.StringRelatedField(many=True)

    class Meta:
        model = BlogPost 
        fields = ['title', 'slug', 'category', 'tags', 'header_image', 'excerpt', 'month', 'day', 'content', 'featured', 'date_created']
        lookup_field = 'slug'
