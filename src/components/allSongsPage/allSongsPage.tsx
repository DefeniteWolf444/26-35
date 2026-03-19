import SongsTable from '../songTable/songsTable'
import type { Song } from '../types/song'
import useStyles from './allSongsPageStyle';


interface Prop {
    songsList: Song[]
    favoritesId: number[]
    editFavorites: (id: number) => void;
}

const AllSongsPage = ({ songsList, favoritesId, editFavorites }: Prop) => {

    const { classes } = useStyles()
    
    return (
        <div className={classes.container}>
            <h1 className={classes.header}>כל השירים</h1>
            <div className={classes.songsTable}><SongsTable songsList={songsList} favoritesId={favoritesId} editFavorites={editFavorites} /></div>
        </div>
    )
}

export default AllSongsPage