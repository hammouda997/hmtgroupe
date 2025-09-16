# CMS Integration Guide

This guide shows how to integrate the CMS with your existing HMT Group website.

## Overview

The CMS provides a backend API that your existing website can use to fetch dynamic content. This allows you to manage content through the admin dashboard while keeping your existing website design and functionality.

## Integration Steps

### 1. Add Environment Variables

Add the CMS API URL to your main website's environment:

```env
# In your main website's .env file
VITE_CMS_API_URL=http://localhost:5000/api
```

### 2. Install Dependencies

The CMS integration uses the existing dependencies in your project:
- `@tanstack/react-query` (already installed)
- `axios` (already installed)

### 3. Use CMS Components

Replace your existing components with CMS-enabled versions:

#### Replace Hero Component

```tsx
// Instead of importing Hero
import Hero from "@/components/Hero";

// Import the CMS version
import CMSHero from "@/components/CMSHero";

// In your Index.tsx
const Index = () => {
  return (
    <div className="min-h-screen">
      <CMSHero /> {/* This will fetch data from CMS */}
      <ProductShowcase />
      <ServicesOverview />
      <Partners />
      <ContactCTA />
    </div>
  );
};
```

#### Replace ProductShowcase Component

```tsx
// Instead of importing ProductShowcase
import ProductShowcase from "@/components/ProductShowcase";

// Import the CMS version
import CMSProductShowcase from "@/components/CMSProductShowcase";

// In your Index.tsx
const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CMSProductShowcase /> {/* This will fetch products from CMS */}
      <ServicesOverview />
      <Partners />
      <ContactCTA />
    </div>
  );
};
```

### 4. Update Products Page

Update your Products page to use CMS data:

```tsx
import { useProducts, useProductCategories } from "@/hooks/useCMS";

const Products = () => {
  const { data: products, isLoading } = useProducts();
  const { data: categories } = useProductCategories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Use products from CMS instead of static data
  return (
    <div>
      {/* Your existing UI with dynamic data */}
      {products?.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};
```

### 5. Update Services Page

```tsx
import { useServices } from "@/hooks/useCMS";

const Services = () => {
  const { data: services, isLoading } = useServices();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Use services from CMS
  return (
    <div>
      {services?.map(service => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
  );
};
```

### 6. Update About Page

```tsx
import { useCompany } from "@/hooks/useCMS";

const About = () => {
  const { data: company, isLoading } = useCompany();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{company?.name}</h1>
      <p>{company?.about?.description}</p>
      <p>{company?.about?.mission}</p>
      <p>{company?.about?.vision}</p>
      
      {/* Leadership */}
      <div>
        <h2>{company?.leadership?.name}</h2>
        <p>{company?.leadership?.position}</p>
        <blockquote>{company?.leadership?.quote}</blockquote>
      </div>

      {/* Milestones */}
      {company?.milestones?.map((milestone, index) => (
        <div key={index}>
          <span>{milestone.year}</span>
          <p>{milestone.event}</p>
        </div>
      ))}
    </div>
  );
};
```

### 7. Update Contact Page

```tsx
import { useCompany } from "@/hooks/useCMS";

const Contact = () => {
  const { data: company, isLoading } = useCompany();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Contactez-Nous</h1>
      
      {/* Contact Information */}
      <div>
        <h2>Informations de Contact</h2>
        {company?.contact?.phone?.map((phone, index) => (
          <p key={index}>{phone}</p>
        ))}
        {company?.contact?.email?.map((email, index) => (
          <p key={index}>{email}</p>
        ))}
        <p>{company?.contact?.address?.street}</p>
        <p>{company?.contact?.address?.city}</p>
        <p>{company?.contact?.address?.country}</p>
      </div>

      {/* Hours */}
      <div>
        <h3>Horaires</h3>
        <p>{company?.contact?.hours?.weekdays}</p>
        <p>{company?.contact?.hours?.saturday}</p>
        <p>{company?.contact?.hours?.sunday}</p>
      </div>
    </div>
  );
};
```

## Fallback Strategy

All CMS components include fallback data in case the CMS is unavailable:

```tsx
// Example from CMSHero.tsx
const fallbackData = {
  about: {
    description: "HMT Sarl, votre partenaire de confiance..."
  },
  stats: {
    experience: "15+",
    clients: "500+",
    partners: "3"
  }
};

const companyData = company || fallbackData;
```

This ensures your website continues to work even if the CMS is down.

## Error Handling

The CMS hooks include error handling:

```tsx
const { data: products, isLoading, error } = useProducts();

if (error) {
  console.error('Failed to fetch products:', error);
  // Use fallback data or show error message
}
```

## Performance Optimization

The CMS hooks include caching and stale time configuration:

```tsx
// From useCMS.ts
export const useProducts = (params?: { category?: string; search?: string }) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => cmsAPI.getProducts(params),
    select: (data) => data.data,
    staleTime: 5 * 60 * 1000, // 5 minutes cache
  })
}
```

## Migration Strategy

1. **Phase 1**: Set up CMS and admin dashboard
2. **Phase 2**: Create CMS-enabled components alongside existing ones
3. **Phase 3**: Gradually replace static components with CMS versions
4. **Phase 4**: Remove static data and fully rely on CMS

## Testing

Test the integration by:

1. Starting the CMS backend
2. Adding content through the admin dashboard
3. Verifying content appears on the website
4. Testing fallback behavior when CMS is unavailable

## Production Deployment

1. Deploy CMS backend to production
2. Update API URL in environment variables
3. Deploy updated website
4. Configure proper CORS settings for production domain

This integration allows you to maintain your existing website design while gaining the flexibility of a content management system.
