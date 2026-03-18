import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    container: {
        height: '5%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    }
}))

export default useStyles