import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import { NavDrawer } from '../components/NavigationComponents/NavDrawer';
import { AuthPage } from '../containers/Auth/AuthPage';
import { HomePage } from '../containers/Home/HomePage';
import { startLoginWithToken } from '../redux/actions/authActions';
import { NewCategory } from '../containers/Category/NewCategory'
import { EachCategory } from '../containers/Category/EachCategory';
const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: { paddingLeft: drawerWidth },
    flexShrink: 0,
  },
  flex:{
    [theme.breakpoints.up("sm")]: { display: "flex" },
  }
}));


export const AppRouter = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const auth = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(startLoginWithToken())
    }, [dispatch])
    return (
        <>
            {!auth.checking?(
                <Router>
                    {auth.email ? (
                        <div className={classes.flex}>
                            <NavDrawer className={classes.root}/>
                            <Switch>
                                <Route path="/" exact component={HomePage} />
                                <Route path='/categories/new' exact component={NewCategory}/>
                                <Route path='/category/:_id' exact component={EachCategory}/>
                                <Redirect to="/"/>
                            </Switch>
                        </div>
                    )
                        : (
                            <Switch>
                                <Route path="/login" component={AuthPage} />
                                <Redirect to="/login" />
                            </Switch>
                        )
                    }
                </Router>
             ):(
                 <div>
                     Loading...
                 </div>
             )}
        </>
    )
}
