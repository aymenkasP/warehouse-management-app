import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

import {  useDispatch } from 'react-redux'
import {  handleClose } from '../../redux/features/AddForm/AddFormSlice'


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


const AddForm = () => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const Dispatch =useDispatch()

    

    function getModalStyle() {
        const top = 20
        const left = 50
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      }


    return (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
        <Button onClick={()=> Dispatch(handleClose())} >
            Close
        </Button>
    </div>
    );
}

export default AddForm;
