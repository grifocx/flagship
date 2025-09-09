# Content Management Guide

This guide explains how to update the content on the Haymarket Bicycles website. The website uses Astro's content collections to manage structured data like products and services.

## Editing Products

To edit the featured products on the home page, follow these steps:

1.  **Navigate to the `src/content/products` directory.** This directory contains a JSON file for each product.
2.  **Open the JSON file for the product you want to edit.** For example, to edit the Trek Émonda SL 6, open `emonda-sl6.json`.
3.  **Edit the fields as needed.** The available fields are `id`, `name`, `category`, `price`, `image`, and `badge`.
4.  **Save the file.** The changes will be reflected on the website after the next build.

To add a new product, create a new JSON file in the `src/content/products` directory. The filename can be anything, but it's best to use a descriptive name (e.g., `new-bike.json`).

## Editing Services

To edit the services on the services page, follow these steps:

1.  **Navigate to the `src/content/services` directory.** This directory contains a JSON file for each service.
2.  **Open the JSON file for the service you want to edit.** For example, to edit the Basic Tune-Up, open `basic-tune-up.json`.
3.  **Edit the fields as needed.** The available fields are `title`, `price`, `description`, `duration`, and `icon`.
4.  **Save the file.** The changes will be reflected on the website after the next build.

### Available Icons

The `icon` field must be one of the following values:

*   `Wrench`
*   `Ruler`
*   `Calendar`
*   `Settings`
*   `Bike`
*   `Tool`
*   `Cog`
*   `Battery`
*   `Monitor`
