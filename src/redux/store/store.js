import { configureStore } from '@reduxjs/toolkit'
import warehoReducer from "../features/warehouse/warehoSlice"
import AddFormReducer from "../features/AddForm/AddFormSlice"

export default configureStore({
  reducer: {
      warehouse : warehoReducer,
      AddForm : AddFormReducer
  },
})

