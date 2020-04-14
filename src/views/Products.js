import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  productImg: {
    width: '150px',
    height: '150px',
    backgroundColor: 'orange',
    margin: 'auto',
  },
  title: {
    width: '100%',
  },
  products: {
    padding: '10px',
    minHeight: '980px',
    backgroundColor: 'white',
    marginRight: '5px',
  },
  product: {
    padding: '10px',
  },
}));

export const Products = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify='space-around'
      xs={12}
      wrap='wrap'
      className={classes.products}
    >
      {props.location.state !== null && (
        <Typography align='center' variant='h2' className={classes.title}>
          {' '}
          {props.location.state.title}
        </Typography>
      )}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
        <Grid
          key={value}
          container
          xs={4}
          direction='row'
          spacing={2}
          className={classes.product}
        >
          <Grid item container>
            <Avatar variant='square' class={classes.productImg}></Avatar>{' '}
          </Grid>
          <Grid item container justify='center'>
            {' '}
            <Typography align='center'> Product_name</Typography>
          </Grid>
          <Grid item container justify='center'>
            <Typography align='center'> 35 sek</Typography>{' '}
          </Grid>
          <Grid item container justify='center'>
            <Button variant='contained' color='primary'>
              Köp
            </Button>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
