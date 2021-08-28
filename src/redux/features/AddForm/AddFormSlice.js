import { createSlice } from '@reduxjs/toolkit'



export const AddFormSlice = createSlice({
    name: 'AddForm',
    initialState: {
    value: false,
    warehouseInfo :[]
  },

  reducers : {
    handleOpen : (state) => {
          state.value = true
      },
      handleClose : (state) => {
          state.value = false
      },
      addWarehouseFun : (state , action) => {
        state.warehouseInfo.push(action.payload)
      }
  }

})


export const { handleOpen, handleClose ,addWarehouseFun  } = AddFormSlice.actions

export default AddFormSlice.reducer