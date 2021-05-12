import Swal from 'sweetalert2'
import { fetchWithoutToken, fetchWithToken } from '../../helpers/callApi'
import { types } from '../types/types'


export const login = ({user}) => (
    {
        type: types.authLogin,
        payload:user
    }
)


export const startLogin = ({email,password}) =>{
    return async (dispatch) =>{
        dispatch(loading('START'))
        const res = await fetchWithoutToken('auth/login', {email,password},'POST')
        const body = await res.json();
        dispatch(loading('END'))
        if(res.status===200){
            localStorage.setItem('token',body.token)
            dispatch(login(body))
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: body.errors[0].msg,
            })
        }
    }
}


export const loading = (type) =>{
    if(type ==='START'){
        return {
            type: types.authStartLoading
        }
    }
    else{
        return {
            type: types.authEndLoading
        }
    }
}


export const startRegister = ({name,email,password, passwordAgain}) =>{
    return async(dispatch)=>{
        dispatch(loading('START'))
        if(password !== passwordAgain){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password and ConfirmPassword are differents',
            })
        }
        const res = await fetchWithoutToken('auth/register', {name,email,password},'POST')
        const body = await res.json();
        dispatch(loading('END'))
        if(res.status===200){
            localStorage.setItem('token',body.token)
            dispatch(login(body))
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: body.errors[0].msg,
            })
        }
    }
}

export const startLoginWithToken = () =>{
    return async (dispatch)=>{
        const res = await fetchWithToken('auth/login/token')
        const body = await res.json()
        dispatch(loading('END'))
        if(res.status===200){
            dispatch(login(body))
        }
        dispatch(checkingEnd())
    }
}

export const checkingEnd = ()=>({
    type: types.authCheckingEnd
})