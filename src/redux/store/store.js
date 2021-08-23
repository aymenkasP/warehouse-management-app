import { configureStore } from '@reduxjs/toolkit'
import warehoReducer from "../features/warehouse/warehoSlice"

export default configureStore({
  reducer: {
      warehouse : warehoReducer
  },
})

