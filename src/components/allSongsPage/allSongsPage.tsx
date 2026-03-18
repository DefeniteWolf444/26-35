import Fetch from '../Fetch/fetch'
import SongsTable from '../songTable/songsTable'
import type { Song } from '../types/song'
import useStyles from './allSongsPageStyle'


interface Prop {
    songsList: Song[]
    setSongList: (songs: Song[]) => void
}

const AllSongsPage = ({ songsList } : Prop) => {
    
    return (
        <SongsTable songsList={songsList}/>
    )
}

export default AllSongsPage