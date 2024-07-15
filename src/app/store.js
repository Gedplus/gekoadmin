import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice"
import pCategoryReducer from "../features/pcategory/pcategorySlice"
import productReducer from '../features/product/productSlice'
import uploadReducer from "../features/upload/uploadSlice";
import blogReducer from "../features/blog/blogSlice"
import bCategoryReducer from "../features/bcategory/bcategorySlice"
export const store = configureStore({
  reducer: {
auth :authReducer ,     pCategory : pCategoryReducer,  upload: uploadReducer,  product: productReducer, blogs: blogReducer, bCategory :bCategoryReducer,
  },
});
