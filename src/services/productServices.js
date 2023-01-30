import { api } from "../constants/api"

export const productServices = {
    getProducts(query = '') {
        return api.get(`/product${query}`)
    },
    getProductDetail(id) {
        return api.get(`/product/${id}`)
    },
    getCategories() {
        return api.get('/product/categories')
    }
}