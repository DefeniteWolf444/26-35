import SongsTable from '../songTable/songsTable'
import type { Song } from '../types/song'
import useStyles from './favoritesPageStyles'


interface Prop {
    songsList: Song[]
    favoritesId: number[]
    editFavorites: (id: number) => void
}

const FavoritesPage = ({ songsList, favoritesId, editFavorites }: Prop) => {

    const { classes } = useStyles()

    const favoriteSongs = songsList.filter((song: Song) =>
        favoritesId.includes(song.id)
    )
    
    return (
        <div className={classes.container}>
            <h1 className={classes.header}>המועדפים שלי</h1>
            <div className={classes.songsTable}><SongsTable songsList={favoriteSongs} favoritesId={favoritesId} editFavorites={editFavorites} /></div>
        </div>

    )
}

export default FavoritesPage