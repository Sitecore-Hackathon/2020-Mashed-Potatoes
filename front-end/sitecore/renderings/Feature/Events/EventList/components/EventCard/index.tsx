import React from 'react';

import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';

import { red } from '@material-ui/core/colors';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  participateButton: {
    marginRight: '70px',
  },
}));

const EventCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} square>
      <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016" />
      <CardMedia className={classes.media} image="https://via.placeholder.com/150" title="Paella dish" />
      <CardActions disableSpacing>
        <Link href="/event">
          <Button href="/event" className={classes.participateButton} variant="outlined">
            Participate
          </Button>
        </Link>
        <IconButton aria-label="add to favorites">
          <LocationOnIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default EventCard;
