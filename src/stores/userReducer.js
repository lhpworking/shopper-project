import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../services/userService";
import { clearToken, clearUser, getUser, setUser } from "../utils/token";

const initialVal = {
    user: getUser()
}
export const logoutAction = () => {
    clearToken()
    clearUser()
    return {
        type: 'user/logout'
    }
}
// export const getUserInfo = () => {
//     return async (dispatch) => {
//         try {
//             const user = await userService.getInfo()
//             console.log(user);
//             if (user.data) {
//                 setUser(user.data)
//                 console.log(user.data);
//                 dispatch({ type: 'user/setUser', payload: user.data })
//             }
//         } catch (error) {

//         }
//     }
// }

// use redux
// const userReducer = (state = initialVal, action) => {
//     switch (action.type) {
//         case 'user/setUser':
//             return {
//                 ...state,
//                 user: action.payload
//             }
//         case 'user/logout':
//             return {
//                 ...state,
//                 user: null
//             }
//         default:
//             return state
//     }
// }
// export default userReducer

// redux toolkit
export const { reducer: userReducer, name, actions: userActions } = createSlice({
    initialState: initialVal,
    name: 'user',
    reducers: {
        setUser(state, action) {
            // type 1: useful
            state.user = action.payload
            // type 2:
            // return {
            //     ...state,
            //     user: action.payload
            // }
        },
        logout(state, action) {
            state.user = null
        }
    }
})

export const getUserInfo = createAsyncThunk(`${name}/getUserInfo`, async (_, thunkApi) => {
    try {
        /* 
        * Get api user => store value in user (variable)
     */
        const user = await userService.getInfo()
        // console.log(user);

        if (user.data) {
            // console.log(user.data);
            setUser(user.data)
            thunkApi.dispatch(userActions.setUser(user.data))
        }
    } catch (error) {
        console.log("Get user information error:", error);
    }
})