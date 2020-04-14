import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export const StyledMenu = (props) => {
  return (
    <Menu
      id='simple-menu'
      anchorEl={props.anchorEl}
      keepMounted
      open={Boolean(props.anchorEl)}
      onClose={props.handleClose}
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {props.items.map((value) => (
        <NavLink
          activeClassName='Active'
          to={{
            pathname: '/Products',
            state: { title: value },
          }}
        >
          <MenuItem onClick={props.handleClose}>{value}</MenuItem>
        </NavLink>
      ))}
    </Menu>
  );
};
