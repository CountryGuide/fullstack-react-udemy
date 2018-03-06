import axios from 'axios';
import { ActionTypes } from "./types";


export const fetchUser = () => async dispatch => {
    const user = await axios.get('/api/current_user');

    dispatch({ type: ActionTypes.FETCH_USER, payload: { user: user.data } });
};

export const handleToken = token => async dispatch => {
    const user = await axios.post('/api/stripe', token);

    dispatch({ type: ActionTypes.FETCH_USER, payload: { user: user.data } });
};

export const sendSurvey = (values, history) => async dispatch => {
    const user = await axios.post('/api/surveys', values);
    history.push('/surveys');

    dispatch({ type: ActionTypes.SUBMIT_SURVEY, payload: { user: user.data } });
};

export const fetchSurveys = () => async dispatch => {
    const surveys = await axios.get('/api/surveys');

    dispatch({ type: ActionTypes.FETCH_SURVEYS, payload: { surveys: surveys.data.reverse() }});
};

export const deleteSurvey = (surveyId) => async dispatch => {
    await axios.delete(`/api/surveys/${surveyId}`);

    dispatch({ type: ActionTypes.SURVEY_DELETED });
};
