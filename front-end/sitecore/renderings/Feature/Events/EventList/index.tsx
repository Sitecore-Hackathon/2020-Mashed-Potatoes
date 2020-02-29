import React from 'react';

import { Grid } from '@material-ui/core';

import { EventCard, EventTabs, TabPanel } from './components';

const EventList = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <EventTabs value={value} onChange={handleChange} />
      </Grid>
      <TabPanel value={value} index={0}>
        <Grid container justify="center" spacing={4}>
          {[0, 1, 2, 4].map((id) => (
            <Grid key={id} item xs={12}>
              <EventCard />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Grid>
  );
};

export default EventList;
