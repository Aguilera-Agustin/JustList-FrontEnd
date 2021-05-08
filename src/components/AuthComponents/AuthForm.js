import React, { useState } from 'react'
import {  makeStyles, TextField, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    field:{
        width:'100%',
    },
    form:{
        marginTop:'3rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    img:{
        width:'100%', 
        height:'100%'
    },
    buttonContainer:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        marginTop:'3rem'
    }
}))

export const AuthForm = () => {
    const classes = useStyles();
    const [register, setRegister] = useState(false)
    return (
        <>
            <Typography variant='h5' align='center' color='textPrimary' display='block'><b>{register?('Create Account'):('Sign In')}</b></Typography>
            <form className={classes.form}>
                {register&&(
                    <TextField variant='outlined' style={{marginBottom:'1rem'}} className={classes.field} label='Complete Name'/>
                )}
                <TextField variant='outlined' className={classes.field} label='Email'/>
                <TextField variant='outlined' style={{marginTop:'1rem'}}className={classes.field} label='Password'/>
                {register&&(
                    <TextField variant='outlined' style={{marginTop:'1rem'}} className={classes.field} label='Confirm Password'/>
                )}
                <Button disableElevation variant='contained' color={register?('secondary'):('primary')} style={{width:'50%', marginTop:'2rem'}}>{register?('Register'):('Login')}</Button>
                <div  className={classes.buttonContainer}>
                    <Button  size='small' onClick={()=>setRegister(!register)}>{register?('Login with my account'):('Create Account')}</Button>
                </div>
            </form>
        </>
    )
}
