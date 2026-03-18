import useStyles from "./pageContentStyle";
import SideBarItem from "../sideBarItem/sideBarItem";
import AllSongsPage from "../allSongsPage/allSongsPage";
import { useState } from "react";
import type { Song } from "../types/song";
import fetchFunc from "../Fetch/fetch";

const MainDiv = () => {
  const { classes } = useStyles();

  const [currentPage, setCurrentPage] = useState('allSongs');
  const [songsList, setSongsList] = useState<Song[]>([]);

  
  fetchFunc('http://127.0.0.1:5001//api/songs', setSongsList)
  return (
    <div className={classes.mainDiv}>
      <div className={classes.showsOutput}>
        {currentPage === 'allSongs' && (
          <AllSongsPage songsList={songsList} setSongList={setSongsList} />
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