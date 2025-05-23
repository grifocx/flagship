import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

const featuredProducts = [
  {
    id: 'domane',
    name: 'Trek Émonda SL 6',
    category: 'Road Bikes',
    price: '$8,499.99',
    image: '/images/bikes/Domane.jpeg',
    badge: 'Featured',
    description: 'Lightweight carbon frame with Shimano Ultegra components. Perfect for climbing and long-distance rides.',
    specs: ['Carbon Frame', 'Shimano Ultegra', '7.7 kg'],
  },
  {
    id: 'supercal',
    name: 'Trek Supercaliber SL',
    category: 'Mountain Bikes',
    price: '$4,199.99',
    image: '/images/bikes/supercaliber.jpeg',
    badge: 'Staff Pick',
    description: 'Trail-ready full suspension with modern geometry. Handles everything from flow trails to technical descents.',
    specs: ['Fox Suspension', 'Shimano', '29" Wheels'],
  },
  {
    id: 'terra',
    name: 'Orbea Terra OMR',
    category: 'Mountain Bikes',
    price: '$3,499.99',
    image: '/images/bikes/terra.jpg',
    badge: 'New Arrival',
    description: 'Versatile trail bike with premium build. The perfect balance of climbing efficiency and descending capability.',
    specs: ['Carbon Frame', 'Cool', 'Shimano GRX'],
  },
];

export function ProductSpotlight() {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Top Bicycle Models Available in Haymarket</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Featured bikes handpicked by our Northern Virginia cycling experts
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover-scale">
            <CardHeader className="p-0">
              <div className="relative h-64">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={`/.netlify/images?url=${encodeURIComponent(product.image)}&nf_resize=fit&w=600 1x, /.netlify/images?url=${encodeURIComponent(product.image)}&nf_resize=fit&w=1200 2x`}
                    sizes="33vw"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={`/.netlify/images?url=${encodeURIComponent(product.image)}&nf_resize=fit&w=400 1x, /.netlify/images?url=${encodeURIComponent(product.image)}&nf_resize=fit&w=800 2x`}
                    sizes="50vw"
                  />
                  <img
                    src={`/.netlify/images?url=${encodeURIComponent(product.image)}&nf_resize=fit&w=400`}
                    srcSet={`/.netlify/images?url=${encodeURIComponent(product.image)}&nf_resize=fit&w=400 1x, /.netlify/images?url=${encodeURIComponent(product.image)}&nf_resize=fit&w=800 2x`}
                    alt={`${product.name} - ${product.category} available at Haymarket Bicycles in Northern Virginia`}
                    className="absolute inset-0 w-full h-full object-cover"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <Badge className="absolute top-4 right-4 bg-accent">
                  {product.badge}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{product.category}</p>
              <p className="text-lg font-semibold mb-4">{product.price}</p>
              <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
              <ul className="space-y-1">
                {product.specs.map((spec, i) => (
                  <li key={`${product.id}-spec-${i}`} className="text-sm text-muted-foreground">
                    • {spec}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}