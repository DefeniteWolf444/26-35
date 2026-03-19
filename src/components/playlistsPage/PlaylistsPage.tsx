import List from "@mui/material/List";
import useStyles from "./PlaylistsPageStyle";
import { useState } from "react";
import type { Song } from "../types/song";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";
import AllSongsPage from "../allSongsPage/allSongsPage";
interface Playlist {
    name: string;
    playlistId: number;
    songIds: number[];
}

interface Props {
    playlists: Playlist[];
    setPlaylists: (playlists: Playlist[]) => void;
    allSongs: Song[];
}

const PlaylistsPage = ({ playlists, setPlaylists, allSongs }: Props) => {
    const { classes } = useStyles();
    const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | 'empty'>('empty');
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const handleShowPlaylist = (playlistToShow: Playlist) => {
        setCurrentPlaylist(playlistToShow)
    }

    const addPlaylist = async (playlistName: string) => {
        if (!playlistName.trim()) return;
        const newPlaylist: Playlist = {
            name: playlistName,
            playlistId: playlists.length + 1,
            songIds: [],
        };
        try {
            const response = await fetch('http://127.0.0.1:5001/api/playlists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: playlistName }),
            });
            setPlaylists([...playlists, newPlaylist]);
            setText("");
            setOpen(false);
        }
        catch (error) {
            console.error("Error creating post:", error);
            return null;
        }


    };

    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setText("");
        setOpen(false);
    };
    if (currentPlaylist === 'empty') {
        return (
            <div className={classes.container}>
                <div className={classes.buttonAndText}>
                    <button className={classes.addButton} onClick={handleOpenDialog}>
                        + צור פלייליסט
                    </button>
                    <div className={classes.title}>הפלייליסטים שלי</div>
                </div>

                {open && (
                    <div className={classes.overlay} onClick={handleCancel}>
                        <div className={classes.dialog} onClick={(e) => e.stopPropagation()}>
                            <div className={classes.dialogTitle}>יצירת פלייליסט חדש</div>

                            <input
                                className={classes.dialogInput}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="שם הפלייליסט"
                            />

                            <div className={classes.dialogActions}>
                                <button className={classes.saveButton} onClick={() => addPlaylist(text)}>
                                    צור
                                </button>
                                <button className={classes.cancelButton} onClick={handleCancel}>
                                    ביטול
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <List className={classes.list}>
                    {playlists.map((playlist) => (
                        <div className={classes.playlistItem} key={playlist.playlistId} onClick={() => handleShowPlaylist(playlist)}>
                            <div className={classes.playlistName}>{playlist.name}</div>
                            <div className={classes.songsCount}>
                                שירים {playlist.songIds.length}
                            </div>
                        </div>
                    ))}
                </List>
            </div>
        );
    }
    else {

        let newArrToShow: Song[] = [];
        for (let i = 0; i < allSongs.length; i++) {
            if (currentPlaylist.songIds.includes(allSongs[i].id)) {
                newArrToShow = [...newArrToShow, allSongs[i]];
            }
        }
        return (
            <div>
                <div className={classes.playlistTitles}>
                    <IconButton onClick={() => { setCurrentPlaylist('empty') }} className={classes.iconButtonGoBack}>
                        <ArrowBackIcon />
                    </IconButton>
                    <h1 className={classes.titlePlaylist}>
                        {currentPlaylist.name}
                    </h1>
                </div>
                <div>
                    <AllSongsPage songsList={newArrToShow} />
                </div>
            </div>
        )
    }

};

export default PlaylistsPage;