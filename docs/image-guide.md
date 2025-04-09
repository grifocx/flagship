# Image Optimization Guide

## Overview
This guide explains how to use Netlify's Image CDN for optimizing and serving images across the Haymarket Bicycles website.

## Image CDN Configuration

### Base URL Structure
```
/.netlify/images/[path-to-image]?[parameters]
```

### Common Parameters
- `nf_resize`: Resize mode (`fit`, `fill`, `crop`)
- `w`: Width in pixels
- `h`: Height in pixels
- `q`: Quality (1-100)
- `f`: Format (auto, webp, jpeg, png)

## Image Organization

### Directory Structure
```
public/images/
  bikes/           # Bike product images
  maintenance/     # Maintenance and repair images
  services/        # Service-related images
  documentation/   # Documentation and guide images
  team/            # Team member photos
  brands/          # Brand logos and assets
```

### Naming Convention
- Use descriptive, kebab-case filenames
- Include category or purpose in name
- Example: `trek-emonda-sl6-red.jpg`

## Recommended Image Specifications

### Hero Images
- Upload size: 1920×1080px
- Aspect ratio: 16:9
- Format: WebP with JPEG fallback
- Quality: 80-90%
- Loading: High priority

Example implementation:
```html
<picture>
  <source
    media="(min-width: 1024px)"
    srcSet="/.netlify/images/hero/image.jpg?nf_resize=fit&w=1920 1x, /.netlify/images/hero/image.jpg?nf_resize=fit&w=2560 2x"
    sizes="100vw"
  />
  <source
    media="(min-width: 768px)"
    srcSet="/.netlify/images/hero/image.jpg?nf_resize=fit&w=1024 1x, /.netlify/images/hero/image.jpg?nf_resize=fit&w=2048 2x"
    sizes="100vw"
  />
  <img
    src="/.netlify/images/hero/image.jpg?nf_resize=fit&w=800"
    srcSet="/.netlify/images/hero/image.jpg?nf_resize=fit&w=800 1x, /.netlify/images/hero/image.jpg?nf_resize=fit&w=1600 2x"
    alt="Description"
    width="1920"
    height="1080"
    fetchpriority="high"
    decoding="async"
  />
</picture>
```

### Product Images
- Upload size: 1200×800px
- Aspect ratio: 3:2
- Format: WebP with JPEG fallback
- Quality: 80-85%
- Loading: Lazy for grid items

Example implementation:
```html
<picture>
  <source
    media="(min-width: 1024px)"
    srcSet="/.netlify/images/products/bike.jpg?nf_resize=fit&w=600 1x, /.netlify/images/products/bike.jpg?nf_resize=fit&w=1200 2x"
    sizes="33vw"
  />
  <source
    media="(min-width: 768px)"
    srcSet="/.netlify/images/products/bike.jpg?nf_resize=fit&w=400 1x, /.netlify/images/products/bike.jpg?nf_resize=fit&w=800 2x"
    sizes="50vw"
  />
  <img
    src="/.netlify/images/products/bike.jpg?nf_resize=fit&w=400"
    srcSet="/.netlify/images/products/bike.jpg?nf_resize=fit&w=400 1x, /.netlify/images/products/bike.jpg?nf_resize=fit&w=800 2x"
    alt="Product description"
    width="600"
    height="400"
    loading="lazy"
    decoding="async"
  />
</picture>
```

### Resource/Blog Images
- Upload size: 1600×900px
- Aspect ratio: 16:9
- Format: WebP with JPEG fallback
- Quality: 80-85%
- Loading: High priority for featured, lazy for grid

Example implementation:
```html
<picture>
  <source
    media="(min-width: 1024px)"
    srcSet="/.netlify/images/resources/article.jpg?nf_resize=fit&w=1200 1x, /.netlify/images/resources/article.jpg?nf_resize=fit&w=2400 2x"
    sizes="100vw"
  />
  <source
    media="(min-width: 768px)"
    srcSet="/.netlify/images/resources/article.jpg?nf_resize=fit&w=800 1x, /.netlify/images/resources/article.jpg?nf_resize=fit&w=1600 2x"
    sizes="100vw"
  />
  <img
    src="/.netlify/images/resources/article.jpg?nf_resize=fit&w=600"
    srcSet="/.netlify/images/resources/article.jpg?nf_resize=fit&w=600 1x, /.netlify/images/resources/article.jpg?nf_resize=fit&w=1200 2x"
    alt="Article title"
    width="1200"
    height="675"
    fetchpriority="high"
    decoding="async"
  />
</picture>
```

### Team Member Photos
- Upload size: 800×800px
- Aspect ratio: 1:1 (square)
- Format: WebP with JPEG fallback
- Quality: 80-85%
- Loading: Lazy

Example implementation:
```html
<picture>
  <source
    media="(min-width: 1024px)"
    srcSet="/.netlify/images/team/member.jpg?nf_resize=fit&w=400 1x, /.netlify/images/team/member.jpg?nf_resize=fit&w=800 2x"
    sizes="25vw"
  />
  <source
    media="(min-width: 768px)"
    srcSet="/.netlify/images/team/member.jpg?nf_resize=fit&w=300 1x, /.netlify/images/team/member.jpg?nf_resize=fit&w=600 2x"
    sizes="50vw"
  />
  <img
    src="/.netlify/images/team/member.jpg?nf_resize=fit&w=400"
    srcSet="/.netlify/images/team/member.jpg?nf_resize=fit&w=400 1x, /.netlify/images/team/member.jpg?nf_resize=fit&w=800 2x"
    alt="Team member name and role"
    width="400"
    height="400"
    loading="lazy"
    decoding="async"
  />
</picture>
```

## Best Practices

### Responsive Images
- Use `<picture>` element for art direction
- Provide multiple sizes with `srcset`
- Use appropriate `sizes` attribute
- Include width and height attributes
- Set proper loading priority

### Performance Optimization
1. **Loading Priority**
   - Use `fetchpriority="high"` for hero images
   - Use `loading="lazy"` for below-fold images
   - Use `decoding="async"` where appropriate

2. **Size Optimization**
   - Choose appropriate dimensions for usage
   - Use WebP format with JPEG fallback
   - Set quality based on image type
   - Maintain proper aspect ratios

3. **Responsive Design**
   - Provide multiple image sizes
   - Use appropriate breakpoints
   - Set correct sizes attribute
   - Consider art direction needs

### Accessibility
1. **Alt Text**
   - Provide descriptive alt text
   - Include relevant context
   - Be specific but concise
   - Consider SEO implications

2. **Performance**
   - Prevent layout shift with dimensions
   - Use appropriate loading strategies
   - Optimize for different viewports
   - Consider reduced motion preferences

## Image Upload Process

1. **Prepare Images**
   - Use appropriate dimensions
   - Optimize before upload
   - Follow naming conventions
   - Maintain organization

2. **Upload Location**
   - Place in correct category folder
   - Maintain consistent structure
   - Use descriptive filenames
   - Follow naming conventions

3. **Implementation**
   - Use responsive picture element
   - Include proper attributes
   - Set loading priority
   - Add descriptive alt text

## Common Issues and Solutions

### Layout Shift
- Always include width/height attributes
- Maintain aspect ratios
- Use aspect-ratio CSS
- Implement proper placeholders

### Slow Loading
- Optimize image sizes
- Use appropriate loading priority
- Implement proper caching
- Consider preloading critical images

### Quality Issues
- Adjust quality parameter
- Use appropriate dimensions
- Check source image quality
- Verify resize parameters

## Support

For additional assistance:
- Check Netlify's Image Transform documentation
- Contact Netlify support
- Review browser developer tools
- Monitor performance metrics