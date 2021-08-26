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
import AddWarehouse from  '../Add/AddWarehous'

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
 

  const [open, setOpen] = useState(false);

  console.log(open)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
     
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        

          <ListItem button onClick={() => !open? handleOpen() : handleClose()} >
            <ListItemIcon>
              <AddIcon /> 
            </ListItemIcon>
            <ListItemText primary="Add warehouse" />
          </ListItem>

            <AddWarehouse open ={open} setOpen={setOpen} />

          <ListItem button>
            <ListItemIcon>
              <StoreMallDirectoryIcon /> 
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <HomeWorkIcon /> 
            </ListItemIcon>
            <ListItemText primary="My warehouse" />
          </ListItem>

          <ListItem button>
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
      
        <React.Fragment >
          <Button onClick={toggleDrawer('left', true)}>{'left'}</Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
    
    </div>
  );
}
