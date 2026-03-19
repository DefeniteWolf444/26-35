import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  button: {
    color: "#fff",
    backgroundColor: "#7b1fa2",
    "&:hover": {
      backgroundColor: "#6a1b9a",
    },
  },

  menuPaper: {
    maxHeight: "220px",
    width: "250px",
    overflowY: "auto",
    marginTop: "8px",
    borderRadius: "8px",
    backgroundColor: "#1e1e1e",
    color: "#fff",
  },

  menuItem: {
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "rgba(123, 31, 162, 0.08)",
    },
  },
}));

export default useStyles;