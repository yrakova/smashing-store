import React, { Component } from 'react';
import { Query } from 'react-apollo';
import PRODUCTS_QUERY from './all-products';
import Navbar from './Navbar';
import Cart from './Cart';
import Product from './Product';

class Allproducts extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cartitems: [],
			show: false
		};
	}

	addItem(item) {
		this.setState({
			cartitems : this.state.cartitems.concat([item])
		});
	}

	showModal() {
		this.setState({ show: true });
	}

	hideModal() {
		this.setState({ show: false });
	}

	clearItems() {
		this.setState({
			cartitems: []
		});
	}

	render() {
		return (
			<Query query={PRODUCTS_QUERY} >
				{({ loading, error, data }) => {
					if (loading) return <div>Fetching</div>;
					if (error)   return <div>Error</div>;
					const items = data.products;
					const itemssent = this.state.cartitems;
					return (
						<div>
							<Navbar cart={itemssent} show={()=>this.showModal()} />
							<Cart show={this.state.show} items={itemssent}
								handleClose={()=>this.hideModal()}
								handleClear={()=>this.clearItems()}/>
							<div className="container mt-4">
								<div className="row">
									{items.map(item => <Product key={item.id} product={item} addItem={this.addItem.bind(this)} />)}
								</div>
							</div>
						</div>
					);
				}}
			</Query>
		);
	}
}

export default Allproducts;