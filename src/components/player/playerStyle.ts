import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    container: {
        height: '12%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        color: 'white',
        backgroundColor: '#1d1d1d'
    }
}))

export default useStyles