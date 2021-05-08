import { types } from '../types/types';

const initialState = {
    authenticated: false,
    error: null,
    loading: false,
    token: null
}

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                authenticated: false,
                error: null,
                loading: false,
                token: null
            }
        default:
            return state;
    }
}

export default authReducer;