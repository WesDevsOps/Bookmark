import React from 'react';
import '../components/css/UserDisplay.css'
function Userdisplay(props) {
	return (
		<div className="dis1">
			{props.list.map((user) => (

				<div className="display">
					<div className="circle">
					
					</div>
					<div><p>Hey {user.username}</p></div>

				</div>



				))}
			


		</div>


		)
}
export default Userdisplay;