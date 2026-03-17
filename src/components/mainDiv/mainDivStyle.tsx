import { makeStyles } from 'tss-react/mui'


const useStyles = makeStyles()(() => ({
    mainDiv: {
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        height: '80vh',
        backgroundColor: '#121212',
        alignItems: 'center'
    },
    showsOutput: {
        width: '85vw',
        height: '80vh'
    },
    sideBar: {
        display: 'flex',
        flexDirection: 'column',
        width: '15vw',
        height: '80vh',
        borderLeft: '1px solid gray'
    }




}));


export  default useStyles;