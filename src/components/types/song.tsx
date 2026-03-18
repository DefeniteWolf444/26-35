import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useStyles from './songStyle';

export interface Song {
    id: number,
    name: string,
    artist: string,
    album: string
}

const SongItem = (props: Song) => {
    const { classes } = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.nameContainer}>
                <PlayArrowIcon className={classes.icon} />
                <p>{props.name}</p>
                <p className={classes.spacer}>-</p>
                <p>{props.album}</p>
            </div>
            <div className={classes.saveContainer}>
                <AddIcon />
                <FavoriteBorderIcon />
            </div>
        </div>
    )
}

export default SongItem
