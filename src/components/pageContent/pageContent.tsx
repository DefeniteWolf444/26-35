import useStyles from "./pageContentStyle";
import SideBarItem from "../sideBarItem/sideBarItem";
import AllSongsPage from "../allSongsPage/allSongsPage";
import { useEffect, useState } from "react";
import type { Song } from "../types/song";
import fetchFunc from "../fetch/fetch";
import FavoritesPage from "../favoritesPage/favoritesPage";
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
  const [favoritesId, setFavoritesId] = useState<number[]>([])


  useEffect(() => {
    const getSongs = async () => {
      const data = await fetchFunc('http://127.0.0.1:5001/api/songs');
      if (data) {
        setSongsList(data);
      }
    };
    const getFavorites = async () => {
      const data = await fetchFunc('http://127.0.0.1:5001/api/favorites');
      if (data) {
        setFavoritesId(data);
      }
    };

    getFavorites();
    getSongs();
  }, []);

  const addFavorite = async (id: number) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ songId: id })
    };
    fetch('http://127.0.0.1:5001/api/favorites/add', requestOptions)
      .then(response => response.json())
  }

  const removerFavorite = async (id: number) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ songId: id })
    };
    fetch('http://127.0.0.1:5001/api/favorites/remove', requestOptions)
      .then(response => response.json())
  }

  const editFavorites = (id: number) => {
    if (favoritesId.includes(id)) {
      setFavoritesId(favoritesId.filter(favoriteId => !(favoriteId === id)))
      removerFavorite(id)
    }
    else {
      setFavoritesId([...favoritesId, id])
      addFavorite(id)
    }
  }

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
          <AllSongsPage songsList={songsList} favoritesId={favoritesId} editFavorites={editFavorites} />
        )}
        {currentPage === 'favorites' && (
          <FavoritesPage songsList={songsList} favoritesId={favoritesId} editFavorites={editFavorites} />
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