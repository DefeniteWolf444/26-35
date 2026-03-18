import { makeStyles } from 'tss-react/mui'


const useStyles = makeStyles()(() => ({
    mainDiv: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '80%',
        backgroundColor: '#121212',
        alignItems: 'center'
    },
    showsOutput: {
        width: '85%',
        height: '80%'
    },
    sideBar: {
        display: 'flex',
        flexDirection: 'column',
        width: '15%',
        height: '80%',
        borderLeft: '1px solid gray'
    }
}));


export  default useStyles;