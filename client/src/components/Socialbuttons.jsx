import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Socialbuttons extends Component {
	render() {
		return (
			<div>
				<a href="/auth/google" className="btn-large">
					Login With Google
				</a>
				<a href="/auth/facebook" className="btn-large">
					Login With Facebook
				</a>
				<a href="/auth/twitter" className="btn-large">
					Login With Twitter
				</a>
			</div>
		);
	}
}

export default Socialbuttons;
