import React from "react";
import { Button, Menu, MenuItem, ListItemText } from "@mui/material";
import useStyles from "./scrollingMenuStyles";

interface Playlist {
  name: string;
  playlistId: number;
  songIds: number[];
}

interface Prop {
  playlistList: Playlist[];
  handleOnClick: () => void;
}

const ScrollingMenu = ({ playlistList, handleOnClick }: Prop) => {
  const { classes } = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleOpen} className={classes.button}>
        Open Playlists
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: classes.menuPaper,
        }}
      >
        {playlistList.map((playlist) => (
          <MenuItem
            key={playlist.playlistId}
            className={classes.menuItem}
            onClick={() => {
              handleOnClick();
              handleClose();
            }}
          >
            <ListItemText primary={playlist.name} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ScrollingMenu;