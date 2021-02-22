import React from 'react';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import { Divider, Box } from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import MovieIcon from '@material-ui/icons/Movie';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../Episodes/episodesSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  paginator: {
    justifyContent: "center",
    padding: "10px"
  }
}));

export default function Epidodes() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const itemsPerPage = 5;
  const [page, setPage] = React.useState(1);
  const { entities } = useSelector((state) => state.episodes);
  const loading = useSelector((state) => state.loading);

  const handleChange = (event, value) => {
    setPage(value);
    dispatch(fetchEpisodes({pagination: value}))
  };

  return (
    <div>
      <List className={classes.root}>
        {entities.length &&
          entities.slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map(({ id, name, air_date, episode, characters }, i) => (
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
      <div className={classes.root}>
        <Pagination count={entities.length / itemsPerPage} page={page} onChange={handleChange} />
      </div>
    </div>
  );
}