import React from 'react'
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";


const useStyles =  makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        marginRight: "auto",
      },
}))


export const Navbar = ({setOpen}) => {
    const classes = useStyles()
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} onClick={() => setOpen(true)}  color="inherit"> 
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                JUST LIST
            </Typography>
            </Toolbar>
        </AppBar>
    )
}
