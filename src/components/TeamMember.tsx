import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  certifications: string[];
}

export function TeamMember({ name, role, image, bio, certifications }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden hover-scale">
      <div className="aspect-square relative">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={`/.netlify/images?url=${encodeURIComponent(image)}&nf_resize=fit&w=400 1x, /.netlify/images?url=${encodeURIComponent(image)}&nf_resize=fit&w=800 2x`}
            sizes="25vw"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`/.netlify/images?url=${encodeURIComponent(image)}&nf_resize=fit&w=300 1x, /.netlify/images?url=${encodeURIComponent(image)}&nf_resize=fit&w=600 2x`}
            sizes="50vw"
          />
          <img
            src={`/.netlify/images?url=${encodeURIComponent(image)}&nf_resize=fit&w=400`}
            srcSet={`/.netlify/images?url=${encodeURIComponent(image)}&nf_resize=fit&w=400 1x, /.netlify/images?url=${encodeURIComponent(image)}&nf_resize=fit&w=800 2x`}
            alt={`${name} - ${role} at Haymarket Bicycles`}
            className="absolute inset-0 w-full h-full object-cover"
            width="400"
            height="400"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <CardHeader>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-muted-foreground">{role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">{bio}</p>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <Badge key={cert} variant="secondary">
              {cert}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}