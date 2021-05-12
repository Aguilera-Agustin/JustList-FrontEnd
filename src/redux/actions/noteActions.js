import { fetchWithTokenAndParams } from "../../helpers/callApi"
import Swal from 'sweetalert2'
import { types } from "../types/types"

export const startLoadNotes = ({categoryId=''}) =>{
    return async (dispatch) => {
        dispatch(loading('START'))
        const res = await fetchWithTokenAndParams('notes?','','GET',{category:categoryId})
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