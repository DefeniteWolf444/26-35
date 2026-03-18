import AllSongsPage from "./allSongsPage";
import useStyles from "./mainDivStyle";

const MainDiv = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.mainDiv}>
            <div className={classes.showsOutput}>
                <AllSongsPage />
            </div>
            <div className={classes.sideBar}>

            </div>
        </div>
    )
};



export default MainDiv