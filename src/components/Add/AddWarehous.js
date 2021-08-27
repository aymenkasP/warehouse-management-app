import React from 'react';
import Modal from '@material-ui/core/Modal';
import AddForm from './AddForm';

import { useSelector, useDispatch } from 'react-redux'
import { handleOpen, handleClose } from '../../redux/features/AddForm/AddFormSlice'


export default function SimpleModal() {
 
const open = useSelector(state => state.AddForm.value)
console.log(open)
 const Dispatch = useDispatch()




  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        open={open}
        onClose={()=> Dispatch(handleClose())}
        onKeyDown={()=> Dispatch(handleClose())}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {<AddForm   />}
      </Modal>
    </div>
  );
}
