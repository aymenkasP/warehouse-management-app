import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";  

import { useSelector, useDispatch } from 'react-redux'
import { UpdatePage } from '../../redux/features/warehouse/warehoSlice'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function WCard({warehouseName,space,description}) {
  const classes = useStyles();
  const History = useHistory()
  const Dispatch = useDispatch()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {warehouseName}
        </Typography>
       
        <Typography className={classes.pos} color="textSecondary">
          {space} <span>m²</span>
        </Typography>
        <Typography variant="body2" component="p">
          {description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{
            Dispatch(UpdatePage({warehouseName,space,description}))
             History.push('/my-warehouse/' + warehouseName)
             }} >Open</Button>
      </CardActions>
    </Card>
  );
}
