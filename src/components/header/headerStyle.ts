import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    container: {
        height: '8%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        color: '#9c59b7',
        backgroundColor: '#313131'
    },
    title: {
        height: '100%',
        marginRight: '1%'
    },
    icon: {
        height: '100%'
    }
}))

export default useStyles