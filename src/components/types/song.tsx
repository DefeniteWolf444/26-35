import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useStyles from './songStyle';

export interface Song {
    id: 34,
    name: "Todo Es La Musica",
    artist: "Omer Adam",
    album: "Todo Es La Musica"
}

const SongComponent = (props: Song) => {
    const { classes } = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.nameContainer}>
                <PlayArrowIcon />
                <p>{props.name} - </p>
                <p>{props.album}</p>
            </div>
            <div className={classes.saveContainer}>
                <AddIcon />
                <FavoriteBorderIcon />
            </div>
        </div>
    )
}

export default SongComponent