import { z, defineCollection } from 'astro:content';

const productsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    category: z.string(),
    price: z.string(),
    image: z.string(),
    badge: z.string(),
  }),
});

const servicesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    price: z.string(),
    description: z.string(),
    duration: z.string(),
    icon: z.string(),
  }),
});

export const collections = {
  'products': productsCollection,
  'services': servicesCollection,
};
