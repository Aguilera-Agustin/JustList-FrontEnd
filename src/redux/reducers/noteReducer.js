import { types } from '../types/types';

const initialState = {
    notes: null,
    loading:true
}

const noteReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.noteRetrieveNotes:
            return {
                ...state,
                notes: action.payload
            }
        case types.noteStartLoading:
            return{
                ...state,
                loading: true
            }
        case types.noteEndLoading:
            return{
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default noteReducer;