

import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    songContainer: {
        height: '100%',
        maxWidth: '100%',
        paddingRight: '1%',
        paddingLeft: '1%',
        overflowY: 'auto',
        scrollbarWidth: 'none'
    }
}))

export default useStyles