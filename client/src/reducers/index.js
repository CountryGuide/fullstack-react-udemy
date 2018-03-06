import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import { auth } from './auth';
import { surveys } from './surveys';


export const reducers = combineReducers({
    auth,
    surveys,
    form: reduxForm
});
