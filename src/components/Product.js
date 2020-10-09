import React, { Component } from 'react';
import { object, func } from 'prop-types';

class Product extends Component {

	render() {
		return (
			<div className="col-sm-4">
				<div className="card" style={{ width: '18rem' }}>
					{this.props.product.image && <img src={this.props.product.image.url} className="card-img-top" alt="shirt"/>}
					<div className="card-body">
						<h5 className="card-title">{this.props.product.name}</h5>
						<p className="card-title">$ {this.props.product.price}</p>
						<p className="card-title">{this.props.product.description}</p>
						<button className="btn btn-primary" onClick={() => this.props.addItem(this.props.product)}>Buy now</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;

Product.propTypes = {
	product: object,
	addItem: func
};

