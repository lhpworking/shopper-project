import { api } from "../constants/api"

export const productServices = {
    getProducts() {
        return api.get("/product")
    },
    getProductDetail(slug) {
        return api.get(`/product?slug=${slug}`)
    },
    getCategories() {
        return api.get('/categories')
    }
}