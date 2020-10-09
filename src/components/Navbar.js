import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Navbar extends Component {

	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<a href="/" className="navbar-brand">Smashing Stores</a>
				<button className="btn btn-outline-success my-2 my-sm-0"
					type="submit"
					onClick={this.props.show}>
					Cart {this.props.cart.length}
				</button>
			</nav>
		);
	}
}

Navbar.propTypes = {
	show: PropTypes.func,
	cart: PropTypes.array
};

export default Navbar;