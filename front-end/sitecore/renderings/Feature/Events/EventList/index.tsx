import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Chips, EventCard } from './components';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '24px',
  },

  cards: {
    marginTop: '12px',
  },
}));

const EventList = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="xl">
      <Grid xs={12}>
        <Chips />
      </Grid>
      <Grid className={classes.cards} container justify="space-between" spacing={4}>
        {[0, 1, 2, 4].map((id) => (
          <Grid key={id} item>
            <EventCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventList;
