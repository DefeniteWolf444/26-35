import List from "@mui/material/List";
import useStyles from "./PlaylistsPageStyle";

interface Playlist {
  name: string;
  playlistId: number;
  songsId: number[];
}

interface Props {
  playlists: Playlist[];
}

const PlaylistsPage = ({ playlists }: Props) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.buttonAndText}>
        <button className={classes.addButton}>
          + צור פלייליסט
        </button>
        <div className={classes.title}>הפלייליסטים שלי</div>
      </div>

      <List className={classes.list}>
        {playlists.map((playlist) => (
          <div className={classes.playlistItem} key={playlist.playlistId}>
            <div className={classes.playlistName}>{playlist.name}</div>
            <div className={classes.songsCount}>
              {playlist.songsId.length} שירים
            </div>
          </div>
        ))}
      </List>
    </div>
  );
};

export default PlaylistsPage;