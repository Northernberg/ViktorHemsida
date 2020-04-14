import React, { useState } from 'react';
import {
  Grid,
  makeStyles,
  GridList,
  GridListTile,
  GridListTileBar,
  Button,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
    textAlign: 'center',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  wrapper: {
    backgroundImage: `url(${'images/background.jpg'})`,
    backgroundSize: 'cover',
    minHeight: '980px',
    backgroundColor: 'white',
    marginRight: '5px',
    margin: 'auto',
  },
  button: {
    backgroundColor: 'white',
  },
}));

const tileData = [
  {
    img: 'images/background.jpg',
    title: 'Barbeque',
    author: 'Google',
  },
  {
    img: 'images/wood-chips.jpg',
    title: 'wood-chips',
    author: 'Google',
  },
  {
    img: 'images/barbeque-painting.jpg',
    title: 'Barbeque 2',
    author: 'Google',
  },
];

export const Home = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      xs={12}
      wrap='wrap'
      className={classes.wrapper}
      justify='center'
    >
      <Grid item xs={12} justify='center'>
        <Typography variant='h2' xs={12} class={classes.title}>
          Välkommen till Viktors Grill och Co
        </Typography>
      </Grid>
      <Grid container item xs={6} alignItems='center'>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </Grid>
  );
};
