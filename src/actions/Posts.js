
import { GET_POSTS, ADD_POST, DELETE_POST, EDIT_POST, POST_ADDED} from './ActionTypes';
import { createMessage } from './Messages';
import { returnErrors } from "./Messages";
import { tokenConfig } from './auth';
import axios from 'axios';

export const getPosts = () => dispatch => {
    axios.get( 'http://127.0.0.1:8000/api/posts/' )
        .then( res => {
            dispatch( {
                type: GET_POSTS,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}
export const addPost = ( {title, body} ) => ( dispatch, getState ) => {
    const post = JSON.stringify({title, body});
    axios.post( 'http://127.0.0.1:8000/api/posts/', post, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { addPost: "Post added successfully", data:res.data } ) )
            dispatch( {
                type: ADD_POST,
                payload: res.data
            } )
            dispatch( {
                type: POST_ADDED,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}

export const deletePost = ( id ) => ( dispatch, getState ) => {
    axios.delete( `http://127.0.0.1:8000/api/posts/${ id }/`, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { deletePost: "Post deleted successfully" } ) )
            dispatch( {
                type: DELETE_POST,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}

export const editPost = ( {id, title, body}) => ( dispatch, getState ) => {

    // request body
    const post = JSON.stringify({title, body});
    axios.put( `http://127.0.0.1:8000/api/rooms/${ id }/`, post, tokenConfig( getState ))
        .then( res => {
            dispatch( createMessage( { editPost: "Post details edited successfully" } ) )
            dispatch( {
                type: EDIT_POST,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}