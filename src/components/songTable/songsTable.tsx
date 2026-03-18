import type { Song } from "../types/song";
import SongComponent from "../types/song";

interface Prop {
  songsList: Song[];
}

const SongsTable = ({ songsList }: Prop) => {
  return (
    <div>
      {songsList.map((song) => (
        <SongComponent
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