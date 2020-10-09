import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Cart extends Component {

	render() {
		const handleClose = this.props.handleClose;
		const handleClear = this.props.handleClear;
		const items = this.props.items;
		const show = this.props.show;

		return (
			<div className={show ? 'modal display-block' : 'modal display-none'}>
				<section className="main-modal">
					<div className="card-container">
						{	items.filter((item, pos) => {
							return items.indexOf(item) === pos;
						}).map((item, index) =>
							<div key={index} className="card" style={{ width: '18rem' }}>
								<img src={item.image.url} className="card-img-top" alt="shirt"/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<h6 className="card-title">$ {item.price}</h6>
								</div>
							</div>
						)}
					</div>
					<div className='cart-footer'>
						Total items: {items.length}
						<button className="btn btn-warning ml-2" onClick={handleClose}>close</button>
						<button className="btn btn-warning ml-2" onClick={()=>{handleClear(); handleClose();}}>clear</button>
					</div>
				</section>
			</div>
		);
	}

}

Cart.propTypes = {
	handleClose: PropTypes.func,
	handleClear: PropTypes.func,
	show: PropTypes.bool,
	items: PropTypes.array
};

export default Cart;