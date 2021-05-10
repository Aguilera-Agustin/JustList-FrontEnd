import { types } from '../types/types';

const initialState = {
    checking: true
}

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name,
                checking:false
            }
        case types.authStartLoading:
            return{
                ...state,
                loading:true
            }
        case types.authEndLoading:
            return{
                ...state,
                loading:false
            }
        default:
            return state;
    }
}

export default authReducer;