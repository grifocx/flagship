# Component Documentation

## Overview
This document provides a comprehensive guide for all components in the Haymarket Bicycles website, including usage patterns, configuration, and best practices.

## Component Categories

### Layout Components

#### `Navbar`
Navigation component that provides site-wide navigation.

**Props & Configuration:**
```tsx
// No props required
import { Navbar } from '@/components/Navbar';
<Navbar />
```

**Features:**
- Responsive design with mobile menu
- Active link highlighting
- Smooth transitions
- Brand logo integration
- Mobile-optimized touch targets
- Keyboard navigation support

**Best Practices:**
- Place at the top of every page layout
- Ensure consistent navigation state
- Maintain mobile breakpoints
- Test touch targets on mobile

#### `Hero`
Main hero section for landing pages.

**Props & Configuration:**
```tsx
// No props required
import { Hero } from '@/components/Hero';
<Hero />
```

**Features:**
- Full-width background image
- Gradient overlay
- Responsive text sizing
- Call-to-action buttons
- Mobile click-to-call integration

**Best Practices:**
- Use high-quality background images
- Ensure text remains readable
- Optimize for mobile devices
- Test gradient overlay contrast

#### `BackToTop`
Floating button for returning to the top of the page.

**Props & Configuration:**
```tsx
// No props required
import { BackToTop } from '@/components/BackToTop';
<BackToTop />
```

**Features:**
- Appears after scrolling threshold
- Smooth scroll behavior
- Accessible design
- Mobile-friendly touch target
- Keyboard navigation support

**Best Practices:**
- Test scroll threshold
- Ensure smooth animation
- Verify mobile positioning
- Check accessibility compliance

### Product Components

#### `ProductGrid`
Displays a grid of products with filtering capabilities.

**Props & Configuration:**
```tsx
// No props required
import { ProductGrid } from '@/components/ProductGrid';
<ProductGrid />
```

**Features:**
- Responsive grid layout
- Product cards with hover effects
- Image optimization
- Price and category display
- Lazy loading support

**Best Practices:**
- Optimize images for performance
- Implement proper lazy loading
- Test hover states
- Ensure responsive behavior

#### `ProductSpotlight`
Featured products showcase component.

**Props & Configuration:**
```tsx
// No props required
import { ProductSpotlight } from '@/components/ProductSpotlight';
<ProductSpotlight />
```

**Features:**
- Highlighted product display
- Detailed product information
- Custom badges
- Responsive layout
- Image optimization

**Best Practices:**
- Choose high-quality product images
- Write compelling descriptions
- Test responsive layouts
- Optimize image loading

#### `ProductCategories`
Displays product categories in a grid layout.

**Props & Configuration:**
```tsx
// No props required
import { ProductCategories } from '@/components/ProductCategories';
<ProductCategories />
```

**Features:**
- Category cards with icons
- Descriptive text
- Hover effects
- Responsive grid
- Touch-optimized for mobile

**Best Practices:**
- Use clear category names
- Optimize touch targets
- Test hover effects
- Ensure consistent spacing

### Service Components

#### `ServicesList`
Displays available bicycle services.

**Props & Configuration:**
```tsx
// No props required
import { ServicesList } from '@/components/ServicesList';
<ServicesList />
```

**Features:**
- Service cards with icons
- Pricing information
- Duration estimates
- Category organization
- Responsive layout

**Best Practices:**
- Keep pricing current
- Use clear service descriptions
- Maintain consistent formatting
- Test mobile layout

#### `ServicePlans`
Maintenance plan comparison component.

**Props & Configuration:**
```tsx
// No props required
import { ServicePlans } from '@/components/ServicePlans';
<ServicePlans />
```

**Features:**
- Plan comparison cards
- Feature lists
- Pricing display
- Call-to-action buttons
- Responsive design

**Best Practices:**
- Highlight key features
- Maintain clear pricing
- Test mobile comparison view
- Ensure CTA visibility

### Contact Components

#### `ContactForm`
Contact form component with validation.

**Props & Configuration:**
```tsx
// No props required
import { ContactForm } from '@/components/ContactForm';
<ContactForm />
```

**Features:**
- Form validation
- Error handling
- Success notifications
- Field types:
  - Name
  - Email
  - Subject
  - Message
- React Hook Form integration

**Best Practices:**
- Implement proper validation
- Show clear error messages
- Test form submission
- Verify mobile usability

#### `VisitUsTabbed`
Tabbed interface for multiple store locations.

**Props & Configuration:**
```tsx
interface ScheduleItem {
  day: string;
  hours: string;
}

interface VisitUsTabbedProps {
  mainShopHours: ScheduleItem[];
  studioHours: ScheduleItem[];
}

import VisitUsTabbed from '@/components/VisitUsTabbed';

<VisitUsTabbed 
  mainShopHours={mainShopHours}
  studioHours={studioHours}
/>
```

**Features:**
- Tab navigation between locations
- Separate information cards per location
- Responsive design
- Location-specific contact information
- Interactive maps with directions

**Best Practices:**
- Test tab navigation
- Verify map integration
- Ensure mobile usability
- Maintain current hours

### Schema Components

#### `LocalBusinessSchema`
Schema.org markup for local business.

**Props & Configuration:**
```astro
import LocalBusinessSchema from '@/components/LocalBusinessSchema.astro';
<LocalBusinessSchema />
```

**Features:**
- Structured data for SEO
- Business information
- Location details
- Opening hours

**Best Practices:**
- Keep information current
- Validate schema markup
- Test schema implementation
- Monitor search results

## Global Best Practices

### Accessibility
1. Ensure proper ARIA attributes
2. Maintain keyboard navigation
3. Use semantic HTML elements
4. Provide adequate color contrast
5. Ensure touch targets are at least 48px on mobile

### Performance
1. Lazy load images where appropriate
2. Use client:load sparingly
3. Implement proper error boundaries
4. Optimize component re-renders

### Development Standards
1. Use TypeScript for type safety
2. Follow project naming conventions
3. Maintain consistent code style
4. Document complex logic

### Testing
1. Test responsive behavior
2. Verify accessibility
3. Check performance impact
4. Validate form submissions

### Mobile Optimization
1. Test touch targets
2. Verify responsive layouts
3. Check load performance
4. Test offline behavior

## UI Component Library Usage

The project uses shadcn/ui components, imported from `@/components/ui/*`. Key components include:

- `Button` - Interactive buttons
- `Card` - Content containers
- `Dialog` - Modal windows
- `Form` - Form components
- `Input` - Text inputs
- `Select` - Dropdown selection
- `Tabs` - Tabbed interfaces
- `Toast` - Notifications

For detailed usage of UI components, refer to the shadcn/ui documentation and the project's custom implementations.