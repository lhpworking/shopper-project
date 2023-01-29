import { api } from "../constants/api"

const authService = {
    login(data) {
        return api.post('/authentication/v2/users', data)
    },
    register(data) {
        return api.post('/users/register', data)
    },
    refreshToken(dataToken) {
        return api.post('/authentication/v2/refresh-token', dataToken)
    }
}
export default authService