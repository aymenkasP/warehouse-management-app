import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useForm } from "react-hook-form";

import {  useDispatch , useSelector } from 'react-redux'
import {  handleClose,  addWarehouseFun } from '../../redux/features/AddForm/AddFormSlice'


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
    const my_warehouse = useSelector( state => state.AddForm.warehouseInfo)
    const Dispatch =useDispatch()

      console.log({warehouse: my_warehouse})

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => Dispatch(addWarehouseFun(data))

    

    function getModalStyle() {
        const top = 20
        const left = 50
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      }
      console.log(watch("example")); 

    return (
        <div style={modalStyle} className={classes.paper}>
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="Name" {...register("warehouseName")} />
            
            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("space", { required: true })} /> <span>m²</span>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input {...register("description")} /> <span>m²</span>

            <input type="submit" />
          </form>
        <Button onClick={()=> Dispatch(handleClose())} >
            Close
        </Button>
    </div>
    );
}

export default AddForm;
