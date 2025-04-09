import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function ResponsiveImage({
  src,
  alt,
  sizes = "100vw",
  className = "",
  width = 800,
  height = 600,
  priority = false,
}: ResponsiveImageProps) {
  // Base path for Netlify Image CDN
  const imagePath = src.startsWith('http') ? src : `/images/${src}`;
  const netlifyPath = src.startsWith('http') ? src : `/.netlify/images/${src}`;

  return (
    <picture>
      <source
        media="(min-width: 1024px)"
        srcSet={`${netlifyPath}?nf_resize=fit&w=${width} 1x, ${netlifyPath}?nf_resize=fit&w=${width * 2} 2x`}
        sizes={sizes}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${netlifyPath}?nf_resize=fit&w=${Math.floor(width * 0.75)} 1x, ${netlifyPath}?nf_resize=fit&w=${width * 1.5} 2x`}
        sizes={sizes}
      />
      <img
        src={`${netlifyPath}?nf_resize=fit&w=${Math.floor(width * 0.5)}`}
        srcSet={`${netlifyPath}?nf_resize=fit&w=${Math.floor(width * 0.5)} 1x, ${netlifyPath}?nf_resize=fit&w=${width} 2x`}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchpriority={priority ? "high" : "auto"}
      />
    </picture>
  );
}