import axios from "axios";
import { FETCH_USER, FETCH_APIONE_PERMISSION } from "./types";

const APIONE_PROD_URL = "http://localhost:5000";

export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTokenFromApiOne = userid => async dispatch => {
	const res = await axios.post(`${APIONE_PROD_URL}/user_current_user/user`, {
		userid
	});

	localStorage.setItem("gBPAP", res.data.token);
	console.log(res);

	//dispatch({type: FETCH_APIONE_PERMISSION, payload: res.data})
};
