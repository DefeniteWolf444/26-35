import useStyles from "./mainDivStyle";
import AllSongsPage from './allSongsPage'

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