import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Chips, EventCard } from './components';

import { EventData, Item } from '../../../../models';
import { concatLocation } from '../../../../utils';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '24px',
  },

  cards: {
    marginTop: '12px',
  },
}));

interface EventListProps {
  fields: { items: Array<Item<EventData>> };
}

const EventList = ({ fields }: EventListProps) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="xl">
      <Grid xs={12}>
        <Chips />
      </Grid>
      <Grid className={classes.cards} container justify="center" spacing={4}>
        {fields.items.map(({ fields: itemFields, id, name }) => (
          <Grid key={id} item>
            <EventCard
              title={itemFields.Title.value}
              date={itemFields.Date.value}
              location={concatLocation(itemFields.Location.fields)}
              image={{ ...itemFields['Event Banner'].value }}
              subtitle={itemFields.Subtitle.value}
              url={`/${name}`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventList;
