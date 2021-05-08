import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
  } from "react-router-dom";
import { AuthPage } from '../containers/Auth/AuthPage';
import { HomePage } from '../containers/Home/HomePage';

  
  export const AppRouter = () => {
      const authenticated = false;
      return (
        <Router>
            {authenticated?(
                <Switch>
                    <Route path="/"  component={HomePage}/>
                </Switch>
            )
            :(
                <Switch>
                    <Route path="/login"  component={AuthPage}/>
                    <Redirect to="/login" />
                </Switch>
            )
            }
        </Router>
    )
}
