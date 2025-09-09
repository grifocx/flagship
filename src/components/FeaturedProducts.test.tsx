import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FeaturedProducts } from './FeaturedProducts';

describe('FeaturedProducts', () => {
  it('renders correctly', () => {
    const products = [
      {
        id: 'emonda-sl6',
        name: 'Trek Émonda SL 6',
        category: 'Road Bikes',
        price: '$4,399.99',
        image: '/images/products/emonda.jpg',
        badge: 'Best Seller',
      },
      {
        id: 'supercal',
        name: 'Trek Supercaliber SL',
        category: 'Mountain Bikes',
        price: '$3,299.99',
        image: '/images/products/supercaliber.jpg',
        badge: 'New Arrival',
      },
      {
        id: 'topstone',
        name: 'Cannondale Topstone',
        category: 'Gravel Bikes',
        price: '$2,799.99',
        image: '/images/products/topstone.jpg',
        badge: 'Featured',
      },
    ];

    const { asFragment } = render(<FeaturedProducts products={products} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
