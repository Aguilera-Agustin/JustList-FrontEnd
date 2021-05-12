import { fetchWithToken, fetchWithTokenAndParams } from "../../helpers/callApi"
import Swal from 'sweetalert2'
import { types } from "../types/types"

export const startLoadNotes = ({_id=''}) =>{
    return async (dispatch) => {
        dispatch(loading('START'))
        const res = await fetchWithTokenAndParams('notes?','','GET',{category:_id})
        const body = await res.json()
        if(res.status === 200){
            dispatch(retrieveNotes(body))
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: body.errors[0].msg,
            })
        }
        dispatch(loading('END'))
    }
}

export const startCreateNote = ({title, content, _id}) =>{
    return async (dispatch) =>{
        const data = {
            title,
            content,
            category: _id
        }
        const res = await fetchWithToken('notes',data,'POST')
        const body = await res.json()
        if(res.status === 201){
            dispatch(startLoadNotes({_id}))
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

export const deleteNote = (id,category) =>{
    return async(dispatch) =>{
        const res = await fetchWithToken('notes',{note:id},'DELETE')
        const body = await res.json()
        if(res.status===202){
            dispatch(startLoadNotes({_id:category}))
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
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

export const modifyNote = (data,category)=>{
    return async (dispatch) =>{
        const res = await fetchWithToken('notes',data,'PUT')
        const body = await res.json()
        if(res.status===200){
            dispatch(startLoadNotes({_id:category}))
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

export const retrieveNotes = (body) => ({
    type: types.noteRetrieveNotes,
    payload: body
})


export const loading = (type) =>{
    if(type ==='START'){
        return {
            type: types.noteStartLoading
        }
    }
    else{
        return {
            type: types.noteEndLoading
        }
    }
}