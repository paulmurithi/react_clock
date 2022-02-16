import { combineReducers } from 'redux';
import Auth from './auth';
import Errors from './Errors';
import Messages from './Messages';
import Posts from './Posts';
export default combineReducers( {
    auth: Auth,
    errors: Errors,
    messages: Messages,
    Posts: Posts
} );