import React from 'react';
import '../components/css/Productdisplay.css'
function ProductDisplay(props) {

	console.log('list' ,props.list)
	let newStore = JSON.parse(localStorage.getItem('resut'));
	// console.log('New Store:',newStore)

	return (
		<div className="dis">
			{props.list.map((items) => (

				<div className="user-display" key={''}>
					<div>
					
					</div>

					<img src={items.productimage}/>
					<div><p>{items.productname}</p></div>

					<div><p>{items.productprice}</p></div>

				</div>



				))}
			


		</div>


		)
}
export default ProductDisplay;