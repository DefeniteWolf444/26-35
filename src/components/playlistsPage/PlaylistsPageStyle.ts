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

        '&:hover': {
            borderColor: '#7a43aa',
        },
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
}));

export default useStyles;