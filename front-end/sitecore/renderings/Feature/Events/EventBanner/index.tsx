import React from 'react';

import { Image } from '@sitecore-jss/sitecore-jss-react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    // marginTop: '8px',
    paddingTop: '20%',
  },
  img: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
  },
}));

const EventBanner = () => {
  const classes = useStyles();

  const bannerImage = {
    value: {
      src: 'https://via.placeholder.com/1400x282',
      alt: '',
    },
  };

  return (
    <Grid container className={classes.root}>
      <Image className={classes.img} field={bannerImage} />
    </Grid>
  );
};

export default EventBanner;
