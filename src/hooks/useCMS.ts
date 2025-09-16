import { useQuery } from '@tanstack/react-query'
import { cmsAPI } from '../lib/cms-api'

// Hook for fetching products
export const useProducts = (params?: { category?: string; search?: string }) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => cmsAPI.getProducts(params),
    select: (data) => data.data,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

// Hook for fetching a single product
export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => cmsAPI.getProduct(id),
    select: (data) => data.data,
    enabled: !!id,
  })
}

// Hook for fetching product categories
export const useProductCategories = () => {
  return useQuery({
    queryKey: ['product-categories'],
    queryFn: () => cmsAPI.getProductCategories(),
    select: (data) => data.data,
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook for fetching services
export const useServices = (params?: { type?: string }) => {
  return useQuery({
    queryKey: ['services', params],
    queryFn: () => cmsAPI.getServices(params),
    select: (data) => data.data,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

// Hook for fetching a single service
export const useService = (id: string) => {
  return useQuery({
    queryKey: ['service', id],
    queryFn: () => cmsAPI.getService(id),
    select: (data) => data.data,
    enabled: !!id,
  })
}

// Hook for fetching pages
export const usePages = () => {
  return useQuery({
    queryKey: ['pages'],
    queryFn: () => cmsAPI.getPages(),
    select: (data) => data.data,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

// Hook for fetching a single page
export const usePage = (slug: string) => {
  return useQuery({
    queryKey: ['page', slug],
    queryFn: () => cmsAPI.getPage(slug),
    select: (data) => data.data,
    enabled: !!slug,
  })
}

// Hook for fetching company information
export const useCompany = () => {
  return useQuery({
    queryKey: ['company'],
    queryFn: () => cmsAPI.getCompany(),
    select: (data) => data.data,
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook for fetching media files
export const useMedia = (params?: { category?: string; tags?: string }) => {
  return useQuery({
    queryKey: ['media', params],
    queryFn: () => cmsAPI.getMedia(params),
    select: (data) => data.data,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
