import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CharacterDialog from './CharacterDialog';
import { fetchCharacters } from "../Characters/CharacterSlice";
import { useDispatch } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        '& > * + *': {
            marginTop: theme.spacing(2),
          },
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.)',
    },
}));


export default function TitlebarGridList() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const itemsPerPage = 10;
    const [page, setPage] = React.useState(1);
    const { entities } = useSelector((state) => state.characters);
    const loading = useSelector((state) => state.loading);

    const handleChange = (event, value) => {
        setPage(value);
        dispatch(fetchCharacters({pagination: value}))
      };

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {entities.length &&
                    entities.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map((character) => (
                        <GridListTile key={character.id}>
                            <img src={character.image} alt={character.name} />
                            <GridListTileBar
                                className={classes.icon}
                                title={character.name}
                                subtitle={character.status + ' - ' + character.species}
                                actionIcon={
                                   <CharacterDialog character={character} />
                                }
                            />
                        </GridListTile>
                    ))
                }
            </GridList>
            <div className={classes.root}>
                <Pagination count={entities.length / itemsPerPage} page={page} onChange={handleChange} />
            </div>
        </div>
    );
}
