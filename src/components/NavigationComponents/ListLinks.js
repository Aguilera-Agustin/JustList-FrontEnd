import React from 'react'

import { Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar

}))

export const ListLinks = ({setOpen}) => {
    const username = useSelector(state => state.auth.name)
    const dispatch = useDispatch()
    const classes = useStyles()
    const routes = [{
            route: '/welcome',
            title: 'Home',
        },
        {
            route: '/shifts',
            title: 'Shifts',
        },
        {
            route: '/admin',
            title: 'Manage',
        },
        {
            route: '/team',
            title: 'Team',
        },
        {
            route: '/register',
            title: 'New STAFF',
        }

    ]
    return (
        <>
            <div className={classes.toolbar} style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                <Typography variant="button" color="initial">
                  JUST LIST  
                </Typography>
                <Typography variant="caption" color="initial">
                  {username}  
                </Typography>
            </div>
            <Divider />
            <List disablePadding className={classes.drawer}>
          
                    {routes.map((item)=>(
                        <ListItem button component={Link} to={item.route} key={item.route} onClick={() => setOpen(false)}>
                        
                        <ListItemText primary={item.title} />
                    </ListItem>
                    ))}
             
                <Divider/>
                <ListItem button key={"logoutButton"}>
                    <ListItemText primary={"Logout"} />
                </ListItem>
            </List>
        </>
    )
}
