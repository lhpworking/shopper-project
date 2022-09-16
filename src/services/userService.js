import { api } from "../constants/api"

export const userService = {
    getInfo() {
        return api.get('/user/get-info')
    },
    updateUser(data) {
        return api.post('/user/update', data)
    }
}