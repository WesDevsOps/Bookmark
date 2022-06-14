import react from 'react';
import '../components/css/user.css'
import React,{useState} from 'react';

function AddUser(props) {
		const [usermame, setUsername] = useState ('');
				localStorage.setItem(usermame, usermame);
    			var StoredName = localStorage.getItem('usermame');
    			console.log('Stored Name: ', JSON.parse(StoredName));

	const add = (()=>{ 
		console.log(usermame);


		props.add(usermame);

	})
	return (

		<div>

			<div className="form">
				<div className="lable">
				
				<input className="hidden" id="MyPic" type="file" />
				</div>
				<div>
				<input type="text" placeholder="Enter your name" onChange= {(e)=> setUsername(e.target.value)}/>
				
				</div>
				<div>
				<button className="btn1" type="Submit" onClick={add}>Submit</button>
				</div>

			</div>
		</div>

		);
}
document.getElementsByTagName('MyForm').onSubmit = (e) => AddUser();

export default AddUser;









