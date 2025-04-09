import React from 'react';
import { Card, CardContent } from './ui/card';

const brands = [
  {
    id: 'trek',
    name: 'Trek',
    logo: '/images/brands/trek.png',
    description: 'Leading innovator in road and mountain bikes',
  },
  {
    id: 'cannondale',
    name: 'Cannondale',
    logo: '/images/brands/cannondale.png',
    description: 'Performance-driven bikes and equipment',
  },
  {
    id: 'orbea',
    name: 'Orbea',
    logo: '/images/brands/orbea.png',
    description: 'Revolutionary aluminum and carbon frames',
  },
  {
    id: 'bianchi',
    name: 'Bianchi',
    logo: '/images/brands/bianchi.png',
    description: 'Premium mountain bikes and components',
  },
];

export function BrandShowcase() {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Quality Bicycle Brands in Haymarket, VA</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Authorized dealer for the world's finest bicycle manufacturers in Northern Virginia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {brands.map((brand) => (
          <Card key={brand.id} className="overflow-hidden hover-scale">
            <CardContent className="p-6">
              <div className="aspect-video relative mb-6">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={`/.netlify/images?url=${encodeURIComponent(brand.logo)}&nf_resize=fit&w=400 1x, /.netlify/images?url=${encodeURIComponent(brand.logo)}&nf_resize=fit&w=800 2x`}
                    sizes="25vw"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={`/.netlify/images?url=${encodeURIComponent(brand.logo)}&nf_resize=fit&w=300 1x, /.netlify/images?url=${encodeURIComponent(brand.logo)}&nf_resize=fit&w=600 2x`}
                    sizes="50vw"
                  />
                  <img
                    src={`/.netlify/images?url=${encodeURIComponent(brand.logo)}&nf_resize=fit&w=400`}
                    srcSet={`/.netlify/images?url=${encodeURIComponent(brand.logo)}&nf_resize=fit&w=400 1x, /.netlify/images?url=${encodeURIComponent(brand.logo)}&nf_resize=fit&w=800 2x`}
                    alt={`${brand.name} bikes available in Haymarket, VA`}
                    className="absolute inset-0 w-full h-full object-cover rounded-md"
                    width="400"
                    height="225"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <h3 className="text-xl font-semibold mb-2">{brand.name}</h3>
              <p className="text-sm text-muted-foreground">{brand.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}