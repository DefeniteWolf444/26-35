import SongsTable from '../songTable/songsTable'
import type { Song } from '../types/song'


interface FavoritesProp {
    songsList: Song[]
    favoritesId: number[]
}

const FavoritesPage = ({ songsList, favoritesId }: FavoritesProp) => {

    console.log(songsList)
    console.log(favoritesId)

    const favoriteSongs = songsList.filter((song: Song) =>
        favoritesId.includes(song.id)
    )
    console.log(songsList)

    console.log(favoriteSongs)

    return (
        <SongsTable songsList={favoriteSongs} />
    )
}

export default FavoritesPage