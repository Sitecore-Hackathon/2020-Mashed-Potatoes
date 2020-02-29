import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import TagFacesIcon from '@material-ui/icons/TagFaces';

interface ChipData {
  key: number;
  label: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: theme.spacing(0.5),
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }),
);

export interface TagsProps {
  tags: Array<{ label: string; key: number }>;
}

const Tags = ({ tags }: TagsProps) => {
  const classes = useStyles();

  return (
    <>
      {tags.map((data) => {
        let icon;

        if (data.label === 'Sitecore MVP') {
          icon = <TagFacesIcon />;
        }

        return <Chip key={data.key} icon={icon} label={data.label} className={classes.chip} />;
      })}
    </>
  );
};

export default Tags;
