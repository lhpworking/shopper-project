import { api } from "../constants/api"

export const productServices = {
    getProducts(query = '') {
        return api.get(`/product${query}`)
    },
    getProductDetail(slug) {
        return api.get(`/product/${slug}`)
    },
    getCategories() {
        return api.get('/product/categories')
    }
}