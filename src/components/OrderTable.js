import React, { useState } from 'react';
import { Button, TextField, makeStyles, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Clear from '@material-ui/icons/Clear';

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

export const OrderTable = (props) => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table className={classes.table} aria-label='simple table'>
        <TableBody>
          {props.items.map((item) => (
            <TableRow key={props.items.name}>
              <TableCell>
                <img
                  alt={item.img}
                  src={item.img}
                  width='150px'
                  height='100px'
                />{' '}
              </TableCell>
              <TableCell component='th' scope='row'>
                {item.name}
              </TableCell>
              <TableCell align='right'>{item.price}</TableCell>
              <TableCell align='right'>
                {' '}
                <Clear></Clear>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
