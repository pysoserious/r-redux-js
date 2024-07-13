import { configureStore } from "@reduxjs/toolkit";
import todoReducer from  './slicers/todoSlicer'

export const store = configureStore({
    reducer: todoReducer
})