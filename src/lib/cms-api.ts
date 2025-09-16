import axios from 'axios'

const envApi = import.meta.env.VITE_CMS_API_URL as string | undefined
const inferredApi = typeof window !== 'undefined' && window.location.hostname.endsWith('hmtgroupe.com')
  ? 'https://getway.hmtgroupe.com/api'
  : undefined
const API_BASE_URL = envApi || inferredApi || 'http://localhost:5000/api'

const cmsApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Public API endpoints (no authentication required)
export const cmsAPI = {
  // Get all products
  getProducts: (params?: { category?: string; search?: string }) =>
    cmsApi.get('/products', { params }),

  // Get product by ID
  getProduct: (id: string) =>
    cmsApi.get(`/products/${id}`),

  // Get product categories
  getProductCategories: () =>
    cmsApi.get('/products/categories'),

  // Get all services
  getServices: (params?: { type?: string }) =>
    cmsApi.get('/services', { params }),

  // Get service by ID
  getService: (id: string) =>
    cmsApi.get(`/services/${id}`),

  // Get page by slug
  getPage: (slug: string) =>
    cmsApi.get(`/pages/${slug}`),

  // Get all pages
  getPages: () =>
    cmsApi.get('/pages'),

  // Get company information
  getCompany: () =>
    cmsApi.get('/company'),

  // Get media files
  getMedia: (params?: { category?: string; tags?: string }) =>
    cmsApi.get('/media', { params }),

  // Create devis from contact form
  createDevis: (data: {
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    clientCompany?: string;
    clientAddress?: string;
    projectType: string;
    description: string;
  }) =>
    cmsApi.post('/devis/public', data),
}

export default cmsApi
