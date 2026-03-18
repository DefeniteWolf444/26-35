import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    headerContainer: {
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
        marginRight: '1%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        height: '100%'
    }
}))

export default useStyles