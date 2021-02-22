import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import MovieIcon from '@material-ui/icons/Movie';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Epidodes() {
  const classes = useStyles();
  const { entities } = useSelector((state) => state.episodes);
  const loading = useSelector((state) => state.loading);

  return (
    <List className={classes.root}>
      {entities.length &&
        entities.map(({ id, name, air_date, episode, characters }, i) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MovieIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={episode + ' - ' + name} secondary={air_date} />
            <ListItemSecondaryAction>
              <Tooltip title="Chapters" placement="right">
                <IconButton edge="end" aria-label="delete">
                  <PeopleAltIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  );
}