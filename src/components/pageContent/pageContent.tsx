import useStyles from "./pageContentStyle";
import SideBarItem from "../sideBarItem/sideBarItem";
import AllSongsPage from "../allSongsPage/allSongsPage";
import { useEffect, useState } from "react";
import type { Song } from "../types/song";
import fetchFunc from "../Fetch/fetch";
import FavoritesPage from "../favoritesPage/favoritesPage";

const MainDiv = () => {
  const { classes } = useStyles();

  const [currentPage, setCurrentPage] = useState('favorites');
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

    getSongs();
    getFavorites();
  }, []);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.showsOutput}>
        {currentPage === 'allSongs' && (
          <AllSongsPage songsList={songsList} />
        )}
        {currentPage === 'favorites' && (
          <FavoritesPage songsList={songsList} favoritesId={favoritesId} />
        )}
      </div>

      <div className={classes.sideBar}>
        <SideBarItem iconImage="home" name="כל השירים" />
        <SideBarItem iconImage="playlist" name="פלייליסטים" />
        <SideBarItem iconImage=" " name="מועדפים" />
      </div>
    </div>
  );
};

export default MainDiv;