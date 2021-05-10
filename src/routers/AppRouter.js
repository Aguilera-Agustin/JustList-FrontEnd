import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";
import { NavDrawer } from '../components/NavigationComponents/NavDrawer';
import { AuthPage } from '../containers/Auth/AuthPage';
import { HomePage } from '../containers/Home/HomePage';
import { startLoginWithToken } from '../redux/actions/authActions';

  
  export const AppRouter = () => {
      const dispatch = useDispatch() 
      const auth = useSelector(state => state.auth)
      useEffect(() => {
          if(localStorage.getItem('token')){
              dispatch(startLoginWithToken())
          }
      }, [dispatch])
      return (
        <Router>
            {auth.email?(
                <>
                <NavDrawer/>
                <Switch>
                    <Route path="/"  component={HomePage}/>
                </Switch>
                </>
            )
            :(
                <Switch>
                    <Route path="/login"  component={AuthPage}/>
                </Switch>
            )
            }
        </Router>
    )
}
