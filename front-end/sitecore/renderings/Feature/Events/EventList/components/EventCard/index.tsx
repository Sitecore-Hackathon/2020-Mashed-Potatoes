import React from 'react';

import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import { Typography, CardContent } from '@material-ui/core';

import { red } from '@material-ui/core/colors';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
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
    marginRight: '50px',
  },
}));

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
  url: string;
}

const EventCard = ({ title, location, image, url, date, subtitle }: EventCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} square variant="outlined">
      <CardHeader
        title={title}
        subheader={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <>
            <Typography variant="caption">{location}</Typography>
            <Typography variant="h6">{date}</Typography>
          </>
        }
      />
      <CardMedia className={classes.media} image={image.src} title={image.alt} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link href={url}>
          <Button href={url} className={classes.participateButton} variant="outlined">
            Learn More
          </Button>
        </Link>
        <IconButton aria-label="location">
          <LocationOnIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="download calendar meeting">
          <CloudDownloadIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default EventCard;
