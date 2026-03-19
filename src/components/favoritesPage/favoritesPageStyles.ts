import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    container: {
        width: '100%',
        height: '100%'
    },
    header: {
        maxWidth: '100%',
        maxHeight: '10%',
        direction: 'rtl',
        paddingTop: '1%',
        paddingBottom: '1%',
        paddingRight: '1%'
    },
    songsTable: {
        width: '100%',
        height: '86%'
    }
}))

export default useStyles