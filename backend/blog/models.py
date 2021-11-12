from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify


# class Categories(models.TextChoices):
#     WORLD = 'world'
#     ENVIRONMENT = 'environment'
#     TECHNOLOGY = 'technology'
#     DESIGN = 'design'
#     CULTURE = 'culture'
#     BUSINESS = 'business'
#     POLITICS = 'politics'
#     OPINION = 'opinion'
#     SCIENCE = 'science'
#     HEALTH = 'health'
#     STYLE = 'style'
#     TRAVEL = 'travel'

class BlogCategory(models.Model):
    name = models.CharField(max_length=20, default="")
    slug = models.SlugField(default="do-not-fill", help_text="Automatically filled in.")

    class Meta:
        ordering = ['-name']
        verbose_name_plural = "Blog categories"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        # original_slug = slugify(self.name)
        # queryset = BlogCategory.objects.all().filter(slug__iexact=original_slug).count()

        # count = 1
        # slug = original_slug
        # while(queryset):
        #     slug = original_slug + '-' + str(count)
        #     count += 1
        #     queryset = BlogCategory.objects.all().filter(slug__iexact=slug).count()

        self.slug = slugify(self.name)

        super(BlogCategory, self).save(*args, **kwargs)

class BlogTag(models.Model):
    name = models.CharField(max_length=20, default="")
    hidden = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-name']

    def __str__(self):
        return self.name

class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(default="do-not-fill", help_text="Automatically filled in.")
    category = models.ForeignKey(BlogCategory, on_delete=models.DO_NOTHING, related_name="categorized_blog_posts")
    tags = models.ManyToManyField(BlogTag, default="", blank=True, related_name="related_blog_posts")
    header_image = models.ImageField(verbose_name='header_image', upload_to='headers/%Y/%m/', blank=True, help_text="Select header photo.")
    excerpt = models.CharField(max_length=150)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    @property
    def header_image_url(self):
        if self.header_image and hasattr(self.header_image, 'url'):
            return self.header_image.url

    def save(self, *args, **kwargs):
        # original_slug = slugify(self.title)
        # queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count()

        # count = 1
        # slug = original_slug
        # while(queryset):
        #     slug = original_slug + '-' + str(count)
        #     count += 1
        #     queryset = BlogPost.objects.all().filter(slug__iexact=slug).count()

        self.slug = slugify(self.title)

        # if self.featured:
        #     try:
        #         temp = BlogPost.objects.get(featured=True)
        #         if self != temp:
        #             temp.featured = False
        #             temp.save()
        #     except BlogPost.DoesNotExist:
        #         pass
        
        super(BlogPost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
