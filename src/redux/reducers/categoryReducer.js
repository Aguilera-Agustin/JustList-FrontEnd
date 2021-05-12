import { types } from '../types/types';

const initialState = {
    categories: null,
    loading:false
}

const categoryReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.catRetrieveCategories:
            return {
                ...state,
                categories: action.payload.categories
            }
        default:
            return state;
    }
}

export default categoryReducer;