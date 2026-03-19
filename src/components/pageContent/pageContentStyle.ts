import { makeStyles } from 'tss-react/mui'


const useStyles = makeStyles()(() => ({
    mainDiv: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '80%',
        backgroundColor: '#121212',
        color: '#b3b3b3',
        alignItems: 'center',
        fontFamily: 'sans-serif'
    },
    showsOutput: {
        width: '90%',
        height: '100%'
    },
    sideBar: {
        display: 'flex',
        flexDirection: 'column',
        width: '10%',
        height: '100%',
        borderLeft: '1px solid gray'
    }
}));


export default useStyles;