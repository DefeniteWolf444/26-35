import { color } from '@mui/system';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    container: {
        backgroundColor: '#0f0f0f',
        minHeight: '90%',
        padding: '24px 20px',
        color: 'white',
        direction: 'ltr',
    },

    buttonAndText: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '28px',
    },

    title: {
        fontSize: '22px',
        fontWeight: 700,
        color: 'white',
    },

    addButton: {
        background: 'transparent',
        border: '1px solid #5c2a84',
        color: '#b98ae0',
        borderRadius: '20px',
        padding: '6px 16px',
        cursor: 'pointer',
        fontSize: '13px',
    },

    list: {
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
    },

    playlistItem: {
        padding: '14px 0',
        borderBottom: '1px solid #232323',
        cursor: 'pointer',
    },

    playlistName: {
        fontSize: '16px',
        fontWeight: 600,
        color: 'white',
        marginBottom: '4px',
    },

    songsCount: {
        fontSize: '13px',
        color: '#a7a7a7',
    },

    playlistTitles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },

    dialog: {
        backgroundColor: '#3d3d3d',
        width: '300px',
        padding: '20px',
        borderRadius: '4px',
        direction: 'rtl',
        zIndex: 1001,
    },

    dialogTitle: {
        fontSize: '18px',
        color: 'white',
        marginBottom: '20px',
        textAlign: 'right',
    },

    dialogInput: {
        width: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid #aaa',
        color: 'white',
        padding: '6px 0',
        marginBottom: '20px',
        outline: 'none',
    },

    dialogActions: {
        display: 'flex',
        gap: '12px',
        justifyContent: 'flex-start',
    },

    saveButton: {
        background: 'transparent',
        border: 'none',
        color: '#c58af9',
        cursor: 'pointer',
        fontSize: '14px',
    },

    cancelButton: {
        background: 'transparent',
        border: 'none',
        color: '#c58af9',
        cursor: 'pointer',
        fontSize: '14px',
    },
    iconButtonGoBack: {
        color:'white',
    },
    titlePlaylist : {
        color: 'white'
    }

}));

export default useStyles;