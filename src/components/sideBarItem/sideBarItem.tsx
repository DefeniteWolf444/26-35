import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import useStyles from './sideBarItemStyle';

interface SideBarProp {
  name: string;
  iconImage: string;
}

const SideBarItem = ({ name, iconImage }: SideBarProp) => {
  const { classes } = useStyles();

  if (iconImage === 'home') {
    return (
      <div className={classes.sideBarItem}>
        <HomeIcon />
        <p>{name}</p>
      </div>
    );
  } else if (iconImage === 'playlist') {
    return (
      <div className={classes.sideBarItem}>
        <LibraryMusicIcon />
        <p>{name}</p>
      </div>
    );
  } else {
    return (
      <div className={classes.sideBarItem}>
        <FavoriteIcon />
        <p>{name}</p>
      </div>
    );
  }
};

export default SideBarItem;