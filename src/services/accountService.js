import api from "../constants/api";

const accountServices = {
    getWishLists(query = '') {
        console.log("query", query);
        return api.get(`/ecommerce/v1/profile/wishlist${query}`)
    },
    addWishList(id) {
        return api.post(`/ecommerce/v1/profile/wishlist/${id}`)
    },
    removeWishList(id) {
        return api.delete(`/ecommerce/v1/profile/wishlist/${id}`)
    }
}

export default accountServices