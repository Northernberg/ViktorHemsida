import React, { useState } from 'react';
import { Button, TextField, makeStyles, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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
  },
  form: {
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
  },
  error: {
    color: 'red',
  },
}));

export const Login = (props) => {
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
        Login
      </Typography>
      <Grid container xs={12} justify='center'>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            label='email'
            type='email'
            name='email'
            value={formValues.email}
            className={classes.textField}
            onChange={handleChange}
          ></TextField>
          <TextField
            name='password'
            label='password'
            type='password'
            value={formValues.password}
            className={classes.textField}
            onChange={handleChange}
          ></TextField>
          <Button
            type='submit'
            className={classes.textField}
            color='primary'
            variant='contained'
          >
            Submit
          </Button>
          {error && <p class={classes.error}> Wrong username or password </p>}
        </form>
      </Grid>
    </Grid>
  );
};
