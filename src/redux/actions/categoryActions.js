import {  fetchWithToken } from '../../helpers/callApi'
import { types } from '../types/types'
import Swal from 'sweetalert2'


export const startRetrieveCategories = ()=>{
    return async (dispatch) =>{
        console.log("Entro");
        dispatch(loading('START'))
        const res = await fetchWithToken('category')
        const body = await res.json()
        dispatch(loading('END'))
        if(res.status===200){
            dispatch(retrieveCategories(body))
        }

    }
}

export const retrieveCategories = (body) =>({
    type: types.catRetrieveCategories,
    payload: body
})

export const loading = (type) =>{
    if(type ==='START'){
        return {
            type: types.catStartLoading
        }
    }
    else{
        return {
            type: types.catEndLoading
        }
    }
}

export const startAddCategory = (name, color) =>{
    return async (dispatch) =>{
        dispatch(loading('START'))
        const res = await fetchWithToken('category', {color,name}, 'POST')
        const body = await res.json()
        if(res.status>300){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: body.errors[0].msg,
            })
        }
        else{
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your Category was created successfully!',
            })
            dispatch(startRetrieveCategories())
        }
        dispatch(loading('END'))
    }
}