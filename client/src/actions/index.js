import axios from 'axios';
import {ActionTypes} from "./types";


export const fetchUser = () => async dispatch => {
    const user = await axios.get('/api/current_user');

    dispatch({type: ActionTypes.FETCH_USER, payload: {user: user.data}});
};

export const handleToken = token => async dispatch => {
    const user = await axios.post('/api/stripe', token);

    dispatch({type: ActionTypes.FETCH_USER, payload: {user: user.data}});
};
