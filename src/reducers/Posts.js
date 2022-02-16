import { GET_POSTS, ADD_POST, EDIT_POST, DELETE_POST } from '../actions/ActionTypes';

const initialState = {
    posts: [],
    count: null,
    prev: null,
    next: null
};

export default ( state = initialState, { type, payload } ) => {
    switch ( type ) {
        case GET_POSTS:
            return {
                ...state,
                count: payload.count,
                prev: payload.prev,
                next: payload.next,
                posts: payload.results
            }
        case ADD_POST:
            return {
                ...state,
                posts: [ ...state.posts ]
            }
        default:
            return state;
    }
}