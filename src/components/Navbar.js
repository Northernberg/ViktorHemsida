import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';

const style = makeStyles(() => ({
  navbar: {
    flexWrap: 'wrap',
    fontFamily: 'CashFont',
    padding: 5,
    marginBottom: 16,
    height: '4rem',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#5f6d91',
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    '& a, &:visited, &:hover': {
      textDecoration: 'none',
    },
    '& ul': {
      fontFamily: 'Modak, cursive',
      display: 'flex',
      justifyContent: 'flex-end',
      margin: '0',
    },
    '& li': {
      textAlign: 'center',
      listStyle: 'none',
      margin: '1em',
      '& a': {
        fontFamily: 'CashFont',
        color: 'black',
        display: 'flex',
      },
      '& a:hover': {
        borderBottom: '1px solid',
      },
    },
  },
  logo: {
    height: '4rem',
    alignItems: 'center',
    display: 'flex',
    '& a': {
      fontWeight: 100,
      color: 'black',
    },
  },
  bottomNavbar: {
    position: 'fixed',
    fontFamily: 'CashFont',
    width: '100%',
    bottom: 0,
    backgroundColor: 'royalblue',
    '& ul': {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
  },
}));

export const Navbar = (props) => {
  const classes = style();
  const mobile = useMediaQuery('(max-width: 600px)');
  return mobile ? (
    <div className={classes.bottomNavbar}>
      <ul>
        <li>
          <AccountBalanceIcon> </AccountBalanceIcon>
          <NavLink exact activeClassName='Active' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <div>
            <EnhancedEncryptionIcon> </EnhancedEncryptionIcon>
            <NavLink activeClassName='Active' to='/login'>
              Login
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  ) : (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        {' '}
        <h1>
          <NavLink to='/'> Viktors Grill och Co</NavLink>
        </h1>
      </div>
      <ul>
        <li>
          <NavLink activeClassName='Active' to='/login'>
            <AccountCircle fontSize='large'></AccountCircle>
            <Typography>Login</Typography>
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='Active' to='/home'>
            <ShoppingCart fontSize='large'></ShoppingCart>
            <Typography> Kundvagn </Typography>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
