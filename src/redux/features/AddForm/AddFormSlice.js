import { createSlice } from '@reduxjs/toolkit'



export const AddFormSlice = createSlice({
    name: 'AddForm',
    initialState: {
    value: false,
  },

  reducers : {
    handleOpen : (state) => {
          state.value = true
      },
      handleClose : (state) => {
          state.value = false
      }  
  }

})


export const { handleOpen, handleClose  } = AddFormSlice.actions

export default AddFormSlice.reducer