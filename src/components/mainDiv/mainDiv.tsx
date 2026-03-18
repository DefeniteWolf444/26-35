import useStyles from "./mainDivStyle";
import SideBarItem from "../sideBarItem/sideBarItem";
import AllSongsPage from "./allSongsPage";

const MainDiv = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.mainDiv}>
            <div className={classes.showsOutput}>
                <AllSongsPage />
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