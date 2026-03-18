import SongsTable from '../songTable/songsTable'
import type { Song } from '../types/song'


interface Prop {
    songsList: Song[]
}

const AllSongsPage = ({ songsList } : Prop) => {
    return (
        <SongsTable songsList={songsList}/>
    )
}

export default AllSongsPage