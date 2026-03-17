import useStyles from './playerStyle';

const Player = () => {
    const {classes} = useStyles()

    return (
        <header className={classes.container}>
            <h3>טען שירים</h3>
        </header>
    )
}

export default Player