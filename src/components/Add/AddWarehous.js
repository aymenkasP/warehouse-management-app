import React from 'react';
import Modal from '@material-ui/core/Modal';
import AddForm from './AddForm';


export default function SimpleModal({open , handleClose}) {
 
 




  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        onKeyDown={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {<AddForm  />}
      </Modal>
    </div>
  );
}
