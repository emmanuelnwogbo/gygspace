import { combineReducers } from "redux";
import authReducer from "./authReducer";
//importing the redux form's own reducer
//import { reducer as reduxForm } from "redux-form";

export default combineReducers({
	auth: authReducer
	//form: reduxForm
});
