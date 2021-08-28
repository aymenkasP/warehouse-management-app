import { createSlice } from '@reduxjs/toolkit'



export const warehoSlice = createSlice({
    name: 'warehouse',
    initialState: {
    warehouseInfo:[]
  },

  reducers : {
      UpdatePage : (state, action) => {
          state.warehouseInfo = action.payload
      },
  }

})


export const { UpdatePage } = warehoSlice.actions

export default warehoSlice.reducer