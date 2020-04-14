import React, { useState } from 'react';
import { Button, TextField, makeStyles, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { OrderTable } from '../components/OrderTable.js';
import { Payment } from '../components/Payment.js';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginRight: '5px',
    margin: 'auto',
    padding: '10px',
  },
  textField: {
    maxWidth: 200,
    marginBottom: '5px',
  },
  form: {
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
  },
  error: {
    color: 'red',
  },
  padding: {
    padding: '10px',
  },
}));

export const Checkout = (props) => {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [formValues, setValues] = useState({
    email: '',
    password: '',
  });
  function handleChange(event) {
    event.preventDefault();
    const target = event.target;
    setValues({
      ...formValues,
      [target.name]: target.value,
    });
  }
  console.log(formValues);
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <Grid Container xs={12} className={classes.container} wrap='wrap'>
      <Typography variant='h2' align='center'>
        Dina varor
      </Typography>
      <OrderTable
        items={[
          { name: 'Rökspån', price: '55 sek', img: 'images/wood-chips.jpg' },
          {
            name: 'Gasolgrill',
            price: '999 sek',
            img: 'images/barbeque-painting.jpg',
          },
        ]}
      ></OrderTable>
      <Grid
        container
        xs={12}
        justify='space-around'
        className={classes.padding}
      >
        <Payment></Payment>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Typography variant='h5' align='center'>
            Kundinformation
          </Typography>
          <TextField
            label='Förnamn'
            name='name'
            type='text'
            value={formValues.name}
            className={classes.textField}
            onChange={handleChange}
          ></TextField>
          <TextField
            name='lastname'
            label='Efternamn'
            type='text'
            value={formValues.lastname}
            className={classes.textField}
            onChange={handleChange}
          ></TextField>
          <TextField
            name='email'
            label='Email'
            type='email'
            value={formValues.email}
            className={classes.textField}
            onChange={handleChange}
          ></TextField>
          <TextField
            name='adress'
            label='Address'
            type='text'
            value={formValues.email}
            className={classes.textField}
            onChange={handleChange}
          ></TextField>
          <TextField
            name='postal'
            label='Postnummer'
            type='number'
            value={formValues.email}
            className={classes.textField}
            onChange={handleChange}
          ></TextField>
          <TextField
            name='phone'
            label='Mobilnummer'
            type='number'
            value={formValues.email}
            className={classes.textField}
            onChange={handleChange}
          ></TextField>
          <Button
            type='submit'
            className={classes.textField}
            color='primary'
            variant='contained'
          >
            Spara
          </Button>
          {error && <p class={classes.error}> Wrong username or password </p>}
        </form>
      </Grid>
    </Grid>
  );
};
