import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

const products = [
  {
    id: 'domane',
    name: 'Trek Domane SLR 7',
    category: 'Road Bikes',
    price: '$8,499.99',
    image: '/images/bikes/Domane.jpeg',
    badge: 'Best Seller',
    specs: ['Carbon Frame', 'Shimano Ultegra', '7.7 kg'],
  },
  {
    id: 'supercal',
    name: 'Trek Supercaliber SL',
    category: 'Mountain Bikes',
    price: '$4,199.99',
    image: '/images/bikes/supercaliber.jpeg',
    badge: 'New Arrival',
    specs: ['Fox Suspension', 'Shimano', '29" Wheels'],
  },
  {
    id: 'terra',
    name: 'Orbea Terra OMR',
    category: 'Gravel Bikes',
    price: '$3,499.99',
    image: '/images/bikes/terra.jpeg',
    specs: ['Sick Carbon Frame', 'Shimano GRX', 'Carbon Fork'],
  },
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden hover-scale">
          <CardHeader className="p-0">
            <div className="relative h-64">
              <picture>
                <source
                  media="(min-width: 1280px)"
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
                  className="w-full h-full object-cover"
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              {product.badge && (
                <Badge className="absolute top-4 right-4 bg-accent">
                  {product.badge}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <p className="text-lg font-semibold mt-2">{product.price}</p>
            <ul className="mt-4 space-y-1">
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
  );
}