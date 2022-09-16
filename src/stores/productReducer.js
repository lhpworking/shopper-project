import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productServices } from "../services/productServices";

const initVal = {
    categories: [],
    loadingCategory: false
}

export const { reducer: productReducer, name, actions: productAction } = createSlice({
    initialState: initVal,
    name: 'product',
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state) => {
            state.loadingCategory = true
        })
        builder.addCase(fetchCategory.fulfilled, (state) => {
            state.loadingCategory = false
        })
    }
})

export const fetchCategory = createAsyncThunk(`${name}/fetchCategory`, async (_, thunkApi) => {
    try {
        const categories = await productServices.getCategories()
        thunkApi.dispatch(productAction.setCategories(categories))
    } catch (error) {
        console.log("fetching category error:", error);
    }
})
