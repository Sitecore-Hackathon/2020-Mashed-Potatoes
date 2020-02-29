import React from 'react';

import { Image, RichText } from '@sitecore-jss/sitecore-jss-react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShareIcon from '@material-ui/icons/Share';

import richTextField from './richText.json';

const useStyles = makeStyles(() => ({
  header: {
    marginBottom: '12px',
  },
  image: {
    width: '100%',
  },
}));

const EventDetails = () => {
  const classes = useStyles();

  const bannerImage = {
    value: {
      src: 'https://via.placeholder.com/1400x282',
      alt: '',
    },
  };
  return (
    <>
      <div>
        <Image className={classes.image} field={bannerImage} />
      </div>
      <Paper className={classes.header} elevation={3} square>
        <Container maxWidth="xl">
          <Grid container>
            <Grid className={classes.header} xs={8}>
              <Typography variant="h2">Lorem Ipsum</Typography>
              <Typography variant="h6">date and time</Typography>
              <Typography variant="h4">Location</Typography>
            </Grid>
            <Grid xs={4} justify="flex-end">
              <Grid container justify="flex-end" alignItems="center" style={{ height: '100%' }}>
                <Button variant="outlined">Download ICS</Button>
                <IconButton aria-label="add to favorites">
                  <LocationOnIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Container maxWidth="xl">
        <Grid>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.266046937945!2d27.67940461608875!3d53.927017138758146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcebc667be20d%3A0xe7daaeb2a5f459a7!2sEPAM%20Systems!5e0!3m2!1sru!2sby!4v1582978535964!5m2!1sru!2sby"
            width="100%"
            height="250"
            style={{ border: '0px' }}
          />
        </Grid>
        <Grid container>
          <Grid xs={12}>
            <Typography variant="h4">Details</Typography>
            <RichText field={richTextField} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EventDetails;
