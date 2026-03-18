import useStyles from "./pageContentStyle";
import SideBarItem from "../sideBarItem/sideBarItem";
import AllSongsPage from "../allSongsPage/allSongsPage";
import { useState } from "react";
import type { Song } from "../types/song";
import fetchFunc from "../Fetch/fetch";
import { useEffect } from "react";
import PlaylistsPage from "../playlistsPage/PlaylistsPage";


interface Playlist {
  name:string,
  playlistId: number,
  songsId: number[]
}


const MainDiv = () => {
  const { classes } = useStyles();
  const [playlists,setPlaylists] = useState<Playlist[]>([])
  const [currentPage, setCurrentPage] = useState('allSongs');
  const [songsList, setSongsList] = useState<Song[]>([]);

  const addPlaylist = (newPlaylist: Playlist) => {
    setPlaylists([... playlists, newPlaylist])
  }
  useEffect(() => {
    const getSongs = async () => {
      const data = await fetchFunc('http://127.0.0.1:5001/api/songs');
      if (data) {
        setSongsList(data);
      }
    };
    const getPlaylists = async () => {
      const data = await fetchFunc('http://127.0.0.1:5001/api/playlists')
      if (data) {
        setPlaylists(data);
      }
    } 
    getSongs();
    getPlaylists();
  }, []);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.showsOutput}>
        {currentPage === 'allSongs' && (
          <AllSongsPage songsList={songsList} setSongList={setSongsList} />
        )}

        {currentPage === 'playlists' && ( 
          <PlaylistsPage playlists={playlists}/>
        )}
      </div>

      <div className={classes.sideBar}>
        <SideBarItem iconImage="home" name="כל השירים" hanldeOnClick={() => setCurrentPage('allSongs')}/>
        <SideBarItem iconImage="playlist" name="פלייליסטים" hanldeOnClick={() => setCurrentPage('playlists')}/>
        <SideBarItem iconImage=" " name="מועדפים" hanldeOnClick={() => setCurrentPage('playlists')}/>
      </div>
    </div>
  );
};

export default MainDiv;