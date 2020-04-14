import React, { useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { PayPalButton } from 'react-paypal-button-v2';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '400px',
    backgroundColor: 'orange',
  },
}));

export const Payment = (props) => {
  const classes = useStyles();
  return (
    <Grid containe xs={12} className={classes.container}>
      <PayPalButton
        amount='0.01'
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert('Transaction completed by ' + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch('/paypal-transaction-complete', {
            method: 'post',
            body: JSON.stringify({
              orderID: data.orderID,
            }),
          });
        }}
      />
    </Grid>
  );
};
