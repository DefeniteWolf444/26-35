 import useStyles from "./mainDivStyle";

const MainDiv = () => {
    const { classes } = useStyles();
    
    return (
        <div className={classes.mainDiv}>
            <div className={classes.showsOutput}>

            </div>
            <div className={classes.sideBar}>

            </div>
        </div>
    )
};



export default MainDiv