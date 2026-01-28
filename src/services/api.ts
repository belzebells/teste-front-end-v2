import type { Product } from "../types/Product"
import productsData from "../data/products.json"

interface ProductsResponse {
  success: boolean
  products: Product[]
}

export async function getProducts(): Promise<Product[]> {
  const data = productsData as ProductsResponse
  return data.products
}
