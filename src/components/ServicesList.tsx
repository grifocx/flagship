import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Wrench, Ruler, Calendar, Settings, Bike, PenTool as Tool, Cog, Battery, Monitor } from 'lucide-react';

const iconMap = {
  Wrench,
  Ruler,
  Calendar,
  Settings,
  Bike,
  Tool,
  Cog,
  Battery,
  Monitor,
};

interface Service {
  title: string;
  price: string;
  description: string;
  duration: string;
  icon: keyof typeof iconMap;
}

interface ServicesListProps {
  services: Service[];
}

export function ServicesList({ services }: ServicesListProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Quality and Affordable Bicycle Services in Haymarket, VA</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon];
          return (
            <Card key={service.title} className="hover-scale">
              <CardHeader>
                <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg">
                  <IconComponent className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span>{service.duration}</span>
                </div>
                <div className="mt-4 text-lg font-semibold text-accent text-center">
                  {service.price}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}