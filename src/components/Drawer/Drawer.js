import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddIcon from '@material-ui/icons/Add';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import NoteIcon from '@material-ui/icons/Note';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';

import { useHistory } from "react-router-dom";

//redux
import {useDispatch } from 'react-redux'
import { handleOpen } from '../.././redux/features/AddForm/AddFormSlice'

const useStyles = makeStyles({
  list: {
    width: 250,
    marginTop : '15%'
  },
  fullList: {
    width: 'auto',
  },
});




export default function SwipeableTemporaryDrawer({toggleDrawer , state}) {
  const classes = useStyles();
 const Dispatch = useDispatch()
 const History = useHistory()

  

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        

          <ListItem button   onClick ={()=> Dispatch(handleOpen())}  >
            <ListItemIcon>
              <AddIcon  /> 
            </ListItemIcon>
            <ListItemText primary="Add warehouse" />
          </ListItem>

            

          <ListItem button   onClick={() => History.push("/home")}>
            <ListItemIcon>
              <StoreMallDirectoryIcon /> 
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button  onClick={() => History.push("/my-warehouse")} >
            <ListItemIcon>
              <HomeWorkIcon /> 
            </ListItemIcon>
            <ListItemText primary="My warehouse" />
          </ListItem>

          <ListItem button onClick={() => History.push("/my-nots")} >
            <ListItemIcon>
              <NoteIcon /> 
            </ListItemIcon>
            <ListItemText primary="My Nots" />
          </ListItem>
      
      </List>
     
    </div>
  );

  return (
    <div>
      
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
      
    
    </div>
  );
}
