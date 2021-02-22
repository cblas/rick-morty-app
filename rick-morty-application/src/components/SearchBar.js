import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { fetchEpisodes } from "../features/Episodes/episodesSlice";
import { fetchCharacters } from "../features/Characters/CharacterSlice";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function ComboBox(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [episodeFilters, setEpisodeFilters] = useState({
    name: '',
    episode: '',
  });
  const [characterFilters, setCharacterFilters] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  });

  const getSelected = (event) => {
    const { name, value } = event.target;

    if(props.category === 'episodes'){
      if (value !== undefined) {
        setEpisodeFilters({
          ...episodeFilters,
          name: value,
        });
      }
    }else{
      if (value !== undefined) {
        setCharacterFilters({
          ...characterFilters,
          name: value,
        });
      }
    }
  };

  return (
    <Container maxWidth="sm"> 
            <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={12} md={12}>
                  <Paper component="form" className={classes.root}>
                    <IconButton className={classes.iconButton} aria-label="menu">
                      <MenuIcon />
                    </IconButton>
                    <InputBase
                      className={classes.input}
                      placeholder="Search by name..."
                      inputProps={{ 'aria-label': 'search google maps' }}
                      onChange={getSelected}
                    />
                    <IconButton 
                        onClick={() => props.category === 'episodes' ? dispatch(fetchEpisodes(episodeFilters)) : dispatch(fetchCharacters(characterFilters))}
                        className={classes.iconButton} 
                        aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                </Grid>
            </Grid>
        </Container>
  );
}