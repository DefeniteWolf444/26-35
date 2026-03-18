import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  sideBarItem: {
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    direction: "rtl",
    alignItems: "center",
    justifyContent: "start",
    color: "white",


    "&:hover": {
      backgroundColor: "#3a2238",
      cursor: "pointer",
    },


    "& svg": {
      width: "20px",
      height: "20px",
    },

    "& p": {
      color: "white",
      fontSize: "20px",
    },
  },
  icon: {
    marginRight: '6%',
    marginLeft: '8%'
  }
}));

export default useStyles;