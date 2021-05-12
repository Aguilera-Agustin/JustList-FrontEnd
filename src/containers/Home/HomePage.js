import React from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    container : {
        width : '100%',
    },
    textContainer: {
        position : 'relative',
        top: 200
    },
    buttonContainer:{
        width : '100%',
        display : 'flex',
        justifyContent : 'center',
        position : 'relative',
        top:150
    }
})

export const HomePage = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.textContainer}>
                <div>
                <Typography variant="h3" style={{fontWeight:100}} color="textPrimary" align='center'>Welcome!</Typography>
                <Typography align='center' color='textSecondary' variant='body2'>just simplicity, just tasks, <b>just list</b>.</Typography>
                <div className={classes.buttonContainer}>
                    <Button component={Link} to='/categories/new' variant='contained' color='primary'>Explore JustList</Button>
                </div>
                </div>
            </div>
        </div>
    )
}
