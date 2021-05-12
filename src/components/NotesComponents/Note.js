import { Button, Divider, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    paper:{
        padding:'1rem'
    },
    buttonContainer:{
        display:'flex',
        justifyContent: 'space-between'
    }
})

export const Note = ({title, content}) => {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <Typography>
                {title}
            </Typography>
            <Divider style={{marginBottom:'0.5rem'}} />
            <Typography variant="body2">
                {content}
            </Typography>
            <Divider style={{marginTop:'0.5rem', marginBottom:'0.5rem'}} />
            <div className={classes.buttonContainer}>
                <Button variant='outlined' color='secondary' size='small'>Delete</Button>
                <Button variant='outlined' color='primary' size='small'>Modify</Button>
            </div>
        </Paper>
    )
}
