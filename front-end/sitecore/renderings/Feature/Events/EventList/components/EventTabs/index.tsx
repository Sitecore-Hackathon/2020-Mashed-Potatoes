import React from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Typography, Box } from '@material-ui/core';

interface EventTabsProps {
  onChange: (event: any, newValue: number) => void;
  value: number;
}

export const EventTabs = ({ value, onChange }: EventTabsProps) => {
  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={onChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Upcoming events" />
        <Tab label="Event near you" />
      </Tabs>
    </Paper>
  );
};

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Typography>
  );
};
