import {  makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { AuthForm } from '../../components/AuthComponents/AuthForm';

const useStyles = makeStyles((theme)=>({
    container:{
        width: '100vw',
        height:'100vh',
        background: 'url(https://www.wallpapertip.com/wmimgs/38-385748_material-design.png)',
        backgroundSize:'cover'
    },
    paper:{
        position:'relative',
        margin:'auto',
        [theme.breakpoints.down('xs')]:{
            width:'80%',
            top:40,
        },
        [theme.breakpoints.up('sm')]:{
            width:'50%',
            top:40,
        },
        [theme.breakpoints.up('md')]:{
            width:'30%',
            top:30,
        },
        padding:'3.5rem',
        paddingBottom:'1.5rem',
     
    }
}))
export const AuthPage = () => {
    const classes = useStyles();
    return (
            <div className={classes.container}>
                <Paper className={classes.paper}>
                    <AuthForm/>
                </Paper>
            </div>
    )
}
