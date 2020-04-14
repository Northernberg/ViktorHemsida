import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Phone from '@material-ui/icons/Phone';
import Mail from '@material-ui/icons/Mail';
import { Box } from '@material-ui/core';
const style = makeStyles(() => ({
  navbar: {},
  tab: {
    '& h5:first-child': {
      borderBottom: '1px solid black',
    },
  },
  blue: {
    backgroundColor: '#5f6d91',
  },
}));

export const Footer = (props) => {
  const classes = style();
  return (
    <Grid
      container
      justify='space-around'
      wrap='nowrap'
      className={classes.blue}
    >
      <Grid item className={classes.tab}>
        <Typography variant='h5' align='center'>
          {' '}
          Följ oss här{' '}
        </Typography>
        <Facebook> </Facebook>
        <Instagram> </Instagram>
      </Grid>
      <Grid item className={classes.tab}>
        <Typography variant='h5' align='center'>
          {' '}
          Kontakt{' '}
        </Typography>
        <Typography variant='body2' align='center' gutterBottom>
          <Box display='flex'>
            <Phone> </Phone>073-555 555 555
          </Box>
        </Typography>
        <Typography variant='body2' align='center' gutterBottom>
          <Box display='flex'>
            {' '}
            <Mail></Mail>volvo_viktor@gmail.com{' '}
          </Box>
        </Typography>
      </Grid>
      <Grid item className={classes.tab}>
        <Typography variant='h5' align='center'>
          {' '}
          Om oss{' '}
        </Typography>
        <Typography variant='body2' aling='center'>
          {' '}
          Vi grundandes i Tungelsta 2020
        </Typography>
      </Grid>
    </Grid>
  );
};
