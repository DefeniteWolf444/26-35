import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    container: {
        height: '30px',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: '1px solid gray',
        "&:hover": {
            backgroundColor: "#3b3a3a",
            cursor: "pointer",
        }
    },
    nameContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        "& p": {
            fontSize: "100%"
        }
    },
    saveContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    playIcon: {
        color: '#9c59b7'
    },
    spacer: {
        marginRight: '5px',
        marginLeft: '5px'
    },
    button: {
        backgroundColor: 'transparent',
        color: '#b3b3b3',
        border: '0',
        padding: '0'
    },
    favoriteIcon: {
        color: '#9c59b7'
    }
}))

export default useStyles