import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Navbar } from './components/Navbar.js';
import { Home } from './views/Home.js';
import { Products } from './views/Products.js';
import { Sidebar } from './components/Sidebar.js';
import { Login } from './views/Login.js';
import { Route, BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer.js';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import 'normalize.css';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    minHeight: '980px',
    backgroundColor: 'white',
    marginRight: '5px',
  },
}));

const Routing = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Route exact path='/Products' component={Products} />
      <Route exact path='/' component={Home} />
      <Route exact path='/Login' component={Login} />
      <Footer></Footer>
    </BrowserRouter>
  );
};

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
