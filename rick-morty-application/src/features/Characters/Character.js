import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CharacterDialog from './CharacterDialog';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


// function Status(props) {
//     return (
//         <StatusBullet
//             className={classes.status}
//             color={props.status === 'Alive' ? 'success' :
//                     props.status === 'Dead' ? 'warning' :
//                     'info'}
//             size="sm"
//         />
//     )
// }

export default function TitlebarGridList() {
    const classes = useStyles();
    const { entities } = useSelector((state) => state.characters);
    const loading = useSelector((state) => state.loading);

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {entities.length &&
                    entities.map((character) => (
                        <GridListTile key={character.id}>
                            <img src={character.image} alt={character.name} />
                            <GridListTileBar
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
        </div>
    );
}
