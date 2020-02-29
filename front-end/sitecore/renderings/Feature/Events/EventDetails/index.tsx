import React from 'react';

import { Image, RichText, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShareIcon from '@material-ui/icons/Share';

import { Tags } from './components';
import { SitecoreContext, EventData } from '../../../../models';
import { concatLocation } from '../../../../utils';

const useStyles = makeStyles(() => ({
  header: {
    marginBottom: '12px',
  },
  imageContainer: {
    position: 'relative',
    paddingTop: '40%',
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    height: 'auto',
    maxHeight: '400px',
  },
}));

export interface EventDetailsProps extends SitecoreContext<EventData> {}

const EventDetails = ({ sitecoreContext: { route } }: EventDetailsProps) => {
  const classes = useStyles();

  const { fields } = route;

  const tags = fields.Tags.value.split('|').map((tagLabel, index) => ({ label: tagLabel, key: index }));

  return (
    <>
      <div className={classes.imageContainer}>
        <Image className={classes.image} field={fields['Event Banner']} />
      </div>
      <Paper className={classes.header} elevation={3} square>
        <Container maxWidth="xl">
          <Grid container>
            <Grid className={classes.header} xs={8}>
              <Typography variant="h2">{fields.Title.value}</Typography>
              <Typography variant="h6">{fields.Date.value}</Typography>
              <Typography variant="h4">{concatLocation(fields.Location.fields)}</Typography>

              <Tags tags={tags} />
            </Grid>
            <Grid xs={4} justify="flex-end">
              <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="flex-end"
                style={{ height: '100%' }}
              >
                <div>
                  <Typography variant="h6">Organized by</Typography>
                  <Box fontWeight="700" fontStyle="italic" fontSize="36px">
                    {fields.Organizer.value}
                  </Box>
                </div>
                <div>
                  <IconButton aria-label="download calendar meeting">
                    <CloudDownloadIcon />
                  </IconButton>
                  <IconButton aria-label="add to favorites">
                    <LocationOnIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </div>
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
            <Divider />
            <RichText field={fields.Description} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default withSitecoreContext()(EventDetails);
