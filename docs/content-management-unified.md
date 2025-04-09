# Content Management Guide

## Overview
This guide explains how to manage content in the Resources section using our Git-based workflow. This approach provides a simple, maintainable way to update content without requiring a database or CMS.

## Directory Structure
```
src/
  content/
    resources/
      config.ts           # Schema configuration
      *.md               # Resource content files
  pages/
    resources/
      index.astro        # Resources listing page
      [slug].astro       # Individual resource page
```

## Adding New Content

### 1. Create a New Resource
Create a new `.md` file in `src/content/resources/` with the following frontmatter structure:

```markdown
---
title: "Your Title Here"
description: "A brief description of the resource"
date: "YYYY-MM-DD"
author: "Author Name"
image: "https://images.unsplash.com/..."
category: "Category Name"
featured: false
---

Your content here in Markdown format...
```

### 2. Required Fields
- `title`: The title of the resource
- `description`: A brief summary (shown in cards)
- `date`: Publication date in YYYY-MM-DD format
- `author`: Content author's name
- `image`: URL to the header image (Unsplash recommended)
- `category`: Content category (e.g., "Maintenance", "Buying Guide")
- `featured`: Boolean to mark as featured (only one should be true)

### 3. Writing Content
- Use Markdown syntax for content
- Structure with headings (## for main sections)
- Use lists and emphasis where appropriate
- Keep paragraphs concise and readable
- Include practical, actionable information
- End with relevant calls to action

### 4. Images
- Use high-quality images from Unsplash
- Ensure image URLs are valid and accessible
- Choose images that are relevant to the content
- Optimize images for web performance
- Include descriptive alt text
- Follow the image naming convention

## Content Guidelines

### Writing Style
- Use clear, concise language
- Write in active voice
- Address reader directly
- Include practical examples
- Break up long content with subheadings
- Maintain professional tone
- Include location-specific information where relevant

### SEO Best Practices
- Use descriptive titles
- Write compelling descriptions
- Include relevant keywords naturally
- Use proper heading hierarchy
- Add alt text for images
- Include internal links where appropriate
- Consider local SEO implications

### Content Types
- How-to guides
- Maintenance tips
- Buying guides
- Community events
- Training advice
- Product information
- Local cycling resources

### Categories
Current categories include:
- Maintenance
- Buying Guide
- Training
- Community
- Events
- Documentation

## File Management

### Naming Convention
- Use kebab-case for filenames
- Make names descriptive and URL-friendly
- Include relevant keywords
- Example: `bike-maintenance-101.md`

### Organization
- Place files in appropriate category folders
- Maintain consistent structure
- Use descriptive filenames
- Follow established patterns

## Content Structure

### Best Practices
1. Start with a clear introduction
2. Use proper heading hierarchy
3. Include practical information
4. End with a call to action
5. Keep paragraphs concise
6. Use lists for better readability
7. Include relevant examples
8. Add local context where appropriate

### Example Resource Structure
```markdown
---
title: "Essential Bike Maintenance Tips"
description: "Learn the fundamental maintenance tasks every cyclist should know"
date: "2024-02-21"
author: "John Smith"
image: "https://images.unsplash.com/photo-example"
category: "Maintenance"
featured: false
---

Introduction explaining the importance...

## 1. Main Topic

Detailed explanation with key points...

### Subtopic

Specific details and examples...

## 2. Second Topic

More content with practical tips...

## Conclusion

Summary and call to action...
```

## Featured Content

### Guidelines
- Only one article should be marked as `featured: true`
- Featured articles appear prominently at the top
- Update featured status by modifying frontmatter
- Choose timely and relevant content
- Rotate featured content regularly

### Selection Criteria
- Relevance to current season/events
- Quality of content
- Reader engagement
- Local interest
- Timely information

## Maintenance

### Regular Tasks
1. Review content monthly
2. Update outdated information
3. Check for broken links
4. Update images if needed
5. Refresh featured content
6. Verify all URLs work
7. Update seasonal content
8. Check for accuracy

### Content Calendar
- Plan content in advance
- Maintain consistent publishing schedule
- Coordinate with events
- Track content performance
- Plan seasonal content
- Consider local events

### Quality Control
- Review all content before publishing
- Check for grammatical errors
- Verify all links work
- Test image loading
- Validate markdown formatting
- Ensure mobile readability
- Check SEO elements
- Verify local references

## Publishing Workflow

### 1. Content Creation
```bash
# Local Development
1. Create new .md file
2. Add frontmatter and content
3. Test formatting locally
4. Preview in development
```

### 2. Review Process
1. Self-review content
2. Check formatting
3. Verify images load
4. Test responsiveness
5. Validate links
6. Check SEO elements

### 3. Version Control
```bash
# Commit Changes
1. Stage new/modified files
2. Write descriptive commit message
3. Push to repository
```

### 4. Deployment
- Automatic build on push
- Content live within minutes
- No manual deployment needed
- Verify on production

## Support

For additional assistance:
- Review this guide
- Check existing content
- Contact technical team
- Submit questions via repository
- Reference style guide
- Consult SEO guidelines

Remember: Quality content helps our community and improves our search engine visibility. Take time to create valuable, well-structured resources that benefit our readers.