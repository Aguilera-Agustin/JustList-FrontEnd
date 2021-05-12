import React from 'react'
import {  Hidden, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles =  makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        marginRight: "auto",
      },
}))
export const PageBar = ({title}) => {
    
    const classes = useStyles()
  
    return (
        <Hidden only={'xs'} implementation="css">
   
                <Toolbar>
                <Typography variant="h4" className={classes.title}>
                    {title}
                </Typography>                
                </Toolbar>
      
        </Hidden>
    )
}
