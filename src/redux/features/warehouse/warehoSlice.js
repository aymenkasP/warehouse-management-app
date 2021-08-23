import { createSlice } from '@reduxjs/toolkit'



export const warehoSlice = createSlice({
    name: 'warehouse',
    initialState: {
    value: 0,
  },

  reducers : {
      addOne : (state) => {
          state.value =+ 1
      },
  }

})


export const { addOne } = warehoSlice.actions

export default warehoSlice.reducer