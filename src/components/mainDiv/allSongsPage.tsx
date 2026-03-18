import Fetch from '../Fetch/fetch'
import type { Song } from '../types/song'
import useStyles from './allSongsPageStyle'


interface Prop {
    songsList: Song[]
    setSongList: (songs: Song[]) => void
}

const AllSongsPage = ({ songsList,setSongList } : Prop) => {
    
    return (
        <Fetch url="http://127.0.0.1:5001/api/songs" songsList={songsList} setSongsList={setSongList}/>
    )
}

export default AllSongsPage