import { fetchWithoutToken, fetchWithToken } from '../../helpers/callApi'
import { types } from '../types/types'


export const startRetrieveCategories = ()=>{
    return async (dispatch) =>{
        dispatch(loading('START'))
        const res = await fetchWithToken('category')
        const body = await res.json()
        dispatch(loading('END'))
        console.log(body);
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