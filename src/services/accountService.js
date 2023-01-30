import api from "../constants/api";

const accountServices = {
    getWishLists() {
        // console.log("query", query);
        return api.get(`/product/wishlist`)
    },
    addWishList(id) {
        return api.post(`/product/wishlist/${id}`)
    },
    removeWishList(id) {
        return api.delete(`/product/wishlist/${id}`)
    }
}

export default accountServices