import React, { useState } from 'react'
import {  makeStyles, TextField, Button, Typography } from '@material-ui/core'
import { startLogin, startRegister } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

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
    const dispatch = useDispatch();
    const [registerMode, setRegisterMode] = useState(false)
    const baseData = {
        name:'',
        email:'',
        password:'',
        passwordAgain:'',
    }
    const [data, setData] = useState(baseData)
    const handleOnClick=() =>{
        setData(baseData)
        setRegisterMode(!registerMode)
    }
    const handleInputChange = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        registerMode?(dispatch(startRegister(data))):(dispatch(startLogin(data)))
    }
    return (
        <>
            <Typography variant='h5' align='center' color='textPrimary' display='block'><b>{registerMode?('Create Account'):('Sign In')}</b></Typography>
            <form className={classes.form} onSubmit={handleOnSubmit}>
                {registerMode&&(
                    <TextField value={data.name} onChange={handleInputChange} name='name' variant='outlined' style={{marginBottom:'1rem'}} className={classes.field} label='Complete Name'/>
                )}
                <TextField value={data.email} onChange={handleInputChange} name='email' variant='outlined' className={classes.field} label='Email'/>
                <TextField value={data.password} type='password' onChange={handleInputChange} name='password' variant='outlined' style={{marginTop:'1rem'}}className={classes.field} label='Password'/>
                {registerMode&&(
                    <TextField value={data.passwordAgain} type='password'  onChange={handleInputChange} name='passwordAgain' variant='outlined' style={{marginTop:'1rem'}} className={classes.field} label='Confirm Password'/>
                )}
                <Button disableElevation type='submit' variant='contained' color={registerMode?('secondary'):('primary')} style={{width:'50%', marginTop:'2rem'}}>{registerMode?('Register'):('Login')}</Button>
                <div  className={classes.buttonContainer}>
                    <Button  size='small' onClick={handleOnClick}>{registerMode?('Login with my account'):('Create Account')}</Button>
                </div>
            </form>
        </>
    )
}
