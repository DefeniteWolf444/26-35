import useStyles from "./mainDivStyle";
import SideBarItem from "../sideBarItem/sideBarItem";
import AllSongsPage from "./allSongsPage";
import { useState } from "react";
import type { Song } from "../types/song";

const MainDiv = () => {
    const { classes } = useStyles();

    const [songsList, setSongsList] = useState<Song[]>([]);
    const [currentPage, setCurrentPage] = useState(<AllSongsPage songsList={songsList} setSongList={setSongsList}/>);
    return (
        <div className={classes.mainDiv}>
            <div className={classes.showsOutput}>
                {currentPage}
            </div>
            <div className={classes.sideBar}>
                <SideBarItem iconImage="home" name="כל השירים"/>
                <SideBarItem iconImage="playlist" name="פלייליסטים"/>
                <SideBarItem iconImage=" " name="מועדפים"/>
            </div>
        </div>
    )
};



export default MainDiv