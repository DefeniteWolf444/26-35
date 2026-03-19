import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useStyles from './songStyle';
import { useState } from 'react';

export interface Song {
    id: number,
    name: string,
    artist: string,
    album: string,
    favorite: boolean
    editFavorites: (id: number) => void;
}

const SongItem = (song: Song) => {

    const { classes } = useStyles()
    const [isFavorite, setIsFavorite] = useState<boolean>(song.favorite)

    const addToFavorites = () => {
        setIsFavorite(true)
        song.editFavorites(song.id)
    }

    const RemoveFromFavorites = () => {
        setIsFavorite(false)
        song.editFavorites(song.id)
    }

    console.log(song.favorite)

    return (
        <div className={classes.container}>
            <div className={classes.nameContainer}>
                <PlayArrowIcon className={classes.playIcon} />
                <p>{song.name}</p>
                <p className={classes.spacer}>-</p>
                <p>{song.album}</p>
            </div>
            <div className={classes.saveContainer}>
                <AddIcon />
                {isFavorite && (
                    <button onClick={RemoveFromFavorites} className={classes.button}><FavoriteIcon className={classes.favoriteIcon} /></button>
                )}
                {!isFavorite && (
                    <button onClick={addToFavorites} className={classes.button}><FavoriteBorderIcon /></button>
                )}
            </div>
        </div>
    )
}

export default SongItem
