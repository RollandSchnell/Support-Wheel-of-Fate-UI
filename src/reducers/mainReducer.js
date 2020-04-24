import {
    START_REQUESTING_ITEMS,
    FINISH_REQUESTING_ITEMS,
} from '../actions/index';

const initialState = {
    error: false,
    errorMessage: '',
    isSubmitting: false,
    data: {}
};

const startRequestingItems = (action, state) => {
    return {
        ...state,
        ...action
    }
};

const finishRequestingItems = (action, state) => {
    return {
        ...state,
        ...action
    }
};


const mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case START_REQUESTING_ITEMS:
            return startRequestingItems(action, state);
        case FINISH_REQUESTING_ITEMS:
            return finishRequestingItems(action, state);
        default:
            return state;
    }
};

export default mainReducer;