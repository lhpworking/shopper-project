import { api } from "../constants/api"

const authService = {
    login(data) {
        return api.post('/login', data)
    },
    register(data) {
        return api.post('/register', data)
    },
    refreshToken(dataToken) {
        return api.post('/refresh-token', dataToken)
    }
}
export default authService