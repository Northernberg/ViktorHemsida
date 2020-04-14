import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Grid, Menu, MenuItem, Button } from '@material-ui/core';
import { StyledMenu } from './StyledMenu.js';

const style = makeStyles(() => ({
  sidebar: {
    width: '100%',
    textDecoration: 'none',
    borderRight: '1px solid black',
    backgroundColor: '#5f6d91',

    '& ul': {
      listStyle: 'none',
      textDecoration: 'none',
      padding: '0',
      textAlign: 'center',
      display: 'flex',
    },
    '& ul:first-child': {
      '& li': {
        marginBottom: '10px',
        marginRight: '10px',
      },
    },
    '& a': {
      color: 'black',
    },
  },
}));

export const Sidebar = () => {
  const classes = style();
  const [isClicked, setClick] = useState(0);
  const [isClicked2, setClick2] = useState(0);
  const [isClicked3, setClick3] = useState(0);
  const handleClick = (event) => {
    console.log('y');
    console.log(event.currentTarget.value);
    switch (event.currentTarget.value) {
      case 'Grillar':
        setClick(event.currentTarget);
        break;
      case 'Verktyg':
        setClick2(event.currentTarget);
        break;
      case 'Bränsle':
        setClick3(event.currentTarget);
        break;
      default:
        break;
    }
  };
  const handleClose = () => {
    setClick(null);
  };
  const handleClose2 = () => {
    setClick2(null);
  };
  const handleClose3 = () => {
    setClick3(null);
  };
  return (
    <Grid
      container
      justify='center'
      wrap='nowrap'
      className={classes.sidebar}
      direction='row'
    >
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        value='Grillar'
        onClick={handleClick}
      >
        Grillar
      </Button>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        value='Verktyg'
        onClick={handleClick}
      >
        Verktyg
      </Button>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        value='Bränsle'
        onClick={handleClick}
      >
        Bränsle
      </Button>
      <StyledMenu
        anchorEl={isClicked}
        handleClose={handleClose}
        items={['Gasolgrill', 'Kolgrill', 'Elgrill']}
      ></StyledMenu>
      <StyledMenu
        anchorEl={isClicked2}
        handleClose={handleClose2}
        items={['Bestick', 'Knivar']}
      ></StyledMenu>
      <StyledMenu
        anchorEl={isClicked3}
        handleClose={handleClose3}
        items={['Briketter', 'Rökvirke', 'Gasol']}
      ></StyledMenu>
    </Grid>
  );
};
