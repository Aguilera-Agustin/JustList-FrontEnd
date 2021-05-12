import React, { useEffect } from 'react'

import nextId from "react-id-generator";
import { Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startRetrieveCategories } from '../../redux/actions/categoryActions';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    color:{
        width:'1rem',
        height:'0.3rem',
    }

}))

export const ListLinks = ({setOpen}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startRetrieveCategories())
    }, [dispatch])
    const username = useSelector(state => state.auth.name)
    const classes = useStyles()
    const routes = useSelector(state => state.category.categories)
    return (
        <>
            {routes&& (
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
                                <ListItem button component={Link} to={`/category/${item.name}`} key={nextId()} onClick={() => setOpen(false)}>
                                <ListItemText primary={item.name} />
                                <div className={classes.color} style={{background:item.color}}/>
                                </ListItem>
                            ))}
                            <Divider/>
                            <ListItem button component={Link} to='/categories/new' onClick={() => setOpen(false)}>
                                <ListItemIcon>
                                    <AddCircleIcon/>
                                </ListItemIcon>
                                <ListItemText primary='New Category'/>
                            </ListItem>
                    
                        <Divider/>
                        <ListItem button key={"logoutButton"}>
                            <ListItemText primary={"Logout"} />
                        </ListItem>
                    </List>
                </>
            )}
            
        </>
    )
}
