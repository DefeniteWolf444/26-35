import MusicNoteIcon from '@mui/icons-material/MusicNote';
import useStyles from './headerStyle';

const Header = () => {
    const {classes} = useStyles()

    return (
        <header className={classes.headerContainer}>
            <MusicNoteIcon className={classes.icon}/>
            <h3 className={classes.title}>SpotiPSI</h3>
        </header>
    )
}

export default Header