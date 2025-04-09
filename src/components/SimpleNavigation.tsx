import React from 'react';

export function SimpleNavigation() {
  return (
    <div className="bg-muted py-4 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#services" 
            className="px-4 py-2 bg-background rounded-md shadow hover:bg-accent hover:text-white transition-colors"
          >
            Services
          </a>
          <a 
            href="#reviews" 
            className="px-4 py-2 bg-background rounded-md shadow hover:bg-accent hover:text-white transition-colors"
          >
            Reviews
          </a>
          <a 
            href="#community" 
            className="px-4 py-2 bg-background rounded-md shadow hover:bg-accent hover:text-white transition-colors"
          >
            Community
          </a>
        </div>
      </div>
    </div>
  );
}