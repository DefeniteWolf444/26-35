import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    container: {
        height: '30px',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#b3b3b3',
        borderBottom: '1px solid gray'
    },
    nameContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    saveContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        color: '#9c59b7'
    }
}))

export default useStyles