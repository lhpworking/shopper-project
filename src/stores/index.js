import { configureStore } from '@reduxjs/toolkit'
import { DEBUG } from '../constants/config'
import { authReducer } from './authReducer'
import { productReducer } from './productReducer'
import { userReducer } from './userReducer'

/* 
    ! redux toolkit
    1.Giới thiệu về redux toolkit
    2.set up redux = redux toolkit
    3.thay đổi user , auth thành redux toolkit
    4.sử dụng createAsyncThunk để tạo các action gọi api:
        + pending: kết quả chưa được xử lý , đang chờ 
        + fullFilled: tác vụ được thưc hiện thành công
        + rejected: tác vụ không đồng bộ thất bại
    5. so sánh theo kiểu thuần vs redux toolkit
 */

// redux thunk
// const store = createStore(
//     combineReducers({
//         auth: authReducer,
//         user: userReducer
//     }),
//     compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(window.__REDUX_DEVTOOLS_EXTENSION__)
//     )
// )

// redux toolkit
const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        product: productReducer
    },
    devTools: DEBUG
})


// create the saga middleware
// const sagaMiddleware = createSagaMiddleware()

// const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         user: userReducer
//     },
//     devTools: DEBUG,
//     middleware: [sagaMiddleware]

// })
export default store