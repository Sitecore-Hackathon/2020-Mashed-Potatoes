import React from 'react';

import { Image } from '@sitecore-jss/sitecore-jss-react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { ImageField } from '../../../../models';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    paddingTop: '37%',
  },
  img: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    height: 'auto',
  },
}));

interface EventBannerProps {
  fields: {
    ['Banner Image']: ImageField;
  };
}

const EventBanner = ({ fields }: EventBannerProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Image className={classes.img} field={fields['Banner Image']} />
    </Grid>
  );
};

export default EventBanner;
