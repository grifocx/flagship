import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ServicesList } from './ServicesList';

describe('ServicesList', () => {
  it('renders correctly', () => {
    const services = [
      {
        title: 'Basic Tune-Up - Level 1',
        price: '$99.99',
        description: 'Complete safety check, gear adjustment, brake adjustment, tire inspection, and basic cleaning.',
        duration: '1-2 days',
        icon: 'Wrench',
      },
      {
        title: 'Comprehensive Tune-Up - Level 2',
        price: '$159.99',
        description: 'Everything in basic tune-up plus bearing adjustments, wheel truing, and deep cleaning.',
        duration: '2-3 days',
        icon: 'Settings',
      },
    ];

    const { asFragment } = render(<ServicesList services={services} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
