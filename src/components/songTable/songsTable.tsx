import type { Song } from "../types/song";
import SongItem from "../types/song";
import useStyles from "./songsTableStyle";
interface Prop {
    songsList: Song[];
}

const SongsTable = ({ songsList }: Prop) => {
    const { classes } = useStyles();
    return (
        <div className={classes.songContainer}>
            {songsList.map((song) => (
                <SongItem
                    key={song.id}
                    id={song.id}
                    name={song.name}
                    artist={song.artist}
                    album={song.album}
                />
            ))}
        </div>
    );
};

export default SongsTable;