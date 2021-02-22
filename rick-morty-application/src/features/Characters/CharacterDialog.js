import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import BadgeAvatar from '../../components/BadgeAvatar';
import IconButton from '@material-ui/core/IconButton';
import { blue } from '@material-ui/core/colors';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import WcIcon from '@material-ui/icons/Wc';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import RoomIcon from '@material-ui/icons/Room';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';


const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
});

function CharacterDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open, character } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="dialog-title" open={open}>
            <DialogTitle id="dialog-title">
                <BadgeAvatar character={character}/>{character.name} Profile 
            </DialogTitle>
            <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem>
                        <ListItemIcon>
                            <VerifiedUserIcon />
                        </ListItemIcon>
                        <Typography className={classes.pos} color="textSecondary">
                            Status:&nbsp;
                        </Typography>
                        <Typography variant="body2" component="p">
                            {character.status}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <RecentActorsIcon />
                        </ListItemIcon>
                        <Typography className={classes.pos} color="textSecondary">
                            Specie:&nbsp;
                        </Typography>
                        <Typography variant="body2" component="p">
                            {character.species}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <WcIcon />
                        </ListItemIcon>
                        <Typography className={classes.pos} color="textSecondary">
                            Gender:&nbsp;
                        </Typography>
                        <Typography variant="body2" component="p">
                            {character.name}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <Typography className={classes.pos} color="textSecondary">
                            Origin:&nbsp;
                        </Typography>
                        <Typography variant="body2" component="p">
                            {character.origin.name}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <RoomIcon />
                        </ListItemIcon>
                        <Typography className={classes.pos} color="textSecondary">
                            Location:&nbsp;
                        </Typography>
                        <Typography variant="body2" component="p">
                            {character.location.name}
                        </Typography>
                    </ListItem>
                </List>
            </div>
        </Dialog>
    );
}

CharacterDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};;

export default function CharacterDialogProfile(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <IconButton className={classes.icon} onClick={handleClickOpen}>
                <InfoIcon />
            </IconButton>
            <CharacterDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                character={props.character} />
        </div>
    );
}
