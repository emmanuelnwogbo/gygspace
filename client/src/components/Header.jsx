import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";

import * as actions from "../actions";

import Socialbuttons from "./Socialbuttons";

class Header extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal() {
		this.setState({ showModal: true });
	}

	handleCloseModal() {
		this.setState({ showModal: false });
	}

	getToken() {
		if (this.props.auth) {
			let userid = this.props.auth._id;
			this.props.fetchTokenFromApiOne(userid);
		}
	}

	renderButtons() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<div>
						<li>
							<a className="btn-large" onClick={this.handleOpenModal}>
								LOG IN
							</a>
						</li>
						<li>
							<a className="" onClick={this.handleOpenModal}>
								SIGN UP
							</a>
						</li>
					</div>
				);
			default:
				return (
					<div>
						<li>
							<Link to="/post/new" className="btn-large">
								+
							</Link>
						</li>
						<li>
							<a href="/api/logout">Logout</a>
						</li>
					</div>
				);
		}
	}

	render() {
		//console.log(this.props);
		this.getToken();
		return (
			<div>
				<nav>
					<div className="nav-wrapper header">
						<Link to={"/"} className="left brand-logo gygspacelogo">
							gygspace
						</Link>
						<ul className="right">
							{this.renderButtons()}
						</ul>
					</div>
				</nav>
				<ReactModal
					isOpen={this.state.showModal}
					contentLabel="onRequestClose Example"
					onRequestClose={this.handleCloseModal}
				>
					<a className="" onClick={this.handleCloseModal}>
						close
					</a>
					<p>hello there</p>
					<Socialbuttons />
				</ReactModal>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(Header);
