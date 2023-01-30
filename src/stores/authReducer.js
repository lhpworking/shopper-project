import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import authService from "../services/authService";
import { userService } from "../services/userService";
import { setToken } from "../utils/token";
import { getUserInfo } from "./userReducer";

// export const fetchLogin = (payload) => {
//     return async (dispatch) => {
//         try {
//             const token = await authService.login(payload.data)
//             if (token.data) {
//                 setToken(token.data)
//                 const user = await userService.getInfo()
//                 setUser(user.data)
//                 dispatch({
//                     type: 'user/setUser', payload: user.data
//                 })
//                 payload?.success(user.data)

//             } else if (token.message) {
//                 payload?.error(token)
//             }
//         } catch (error) {
//             // console.log(error.message);
//         }
//     }
// }
// export const fetchRegister = (payload) => {
//     return async (dispatch) => {
//         try {
//             const register = await authService.register(payload.data)
//             if (register.error) {
//                 payload?.error(register)
//             } else {
//                 payload?.success(payload.data)
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// export const authReducer = (state = {}, action) => {
//     return state
// }

// redux toolkit
export const { reducer: authReducer, name, actions: authActions } = createSlice({
    initialState: {
        loadingLogin: false,
        loadingRegister: false
    },
    name: "auth",
    reducers: {},
    extraReducers: (builder) => {
        // fetch login
        builder.addCase(fetchLogin.pending, (state, action) => {
            state.loadingLogin = true
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.loadingLogin = false
        })
        // fetch register
        builder.addCase(fetchRegister.pending, (state, action) => {
            state.loadingRegister = true
        })
        // builder.addCase(fetchRegister.fulfilled, (state, action) => {
        //     state.loadingRegister = false
        // })
        // builder.addCase(fetchRegister.rejected, (state, action) => {
        //     state.loadingRegister = false
        // })
        builder.addMatcher(isAnyOf((fetchRegister.fulfilled, fetchRegister.rejected), (state, action) => {
            state.loadingRegister = false
        }))
    }
})

export const fetchRegister = createAsyncThunk(`${name}/fetchRegister`, async (payload, thunkApi) => {
    try {
        const register = await authService.register(payload.data)
        console.log("register", register);
        if (register) {
            payload?.error(register.message)
        } else {
            payload?.success(payload.data)
            thunkApi.dispatch(fetchLogin({
                data: {
                    username: payload.data.username,
                    password: payload.data.password
                }
            }))
        }
    } catch (error) {
        console.log("fetching register error:", error);
    }
})

export const fetchLogin = createAsyncThunk(`${name}/fetchLogin`, async (payload, thunkApi) => {
    try {
        const token = await authService.login(payload.data)
        // console.log("payload data:", payload.data);
        if (token.data) {
            setToken(token.data)
            const user = await userService.getInfo()
            thunkApi.dispatch(getUserInfo())

            payload?.success(user.data)

        } else if (token.message) {
            payload?.error(token)
        }
    } catch (error) {
        console.log("fetch login error:", error);
    }
})