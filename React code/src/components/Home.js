import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from "./Notfound";
/** 
 * Added by E5CTBU7
 */
class Home extends React.Component {
	
	
	render()
	{
		const obj = [{name:"E5CTBU7",city:"indore"}];
		const title = <div><h4>Warranty Registration</h4></div>;
	
		const navLinks =
	    <div class="list-group">
		<ul>
		<li class="list-group-item"><Link to="/registration">New Registration</Link></li>
		<li class="list-group-item"><Link to="/pendingRegistration">Registration List</Link></li>
		 </ul>
		</div>
	
		return(
				<div class="middle">
				{title}
			    {navLinks}
				<NotFound title = {title} obj={obj}></NotFound>
			    </div>	
		     )
	}

}
export default Home;