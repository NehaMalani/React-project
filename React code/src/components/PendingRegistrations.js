import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/myStyle.css';

class PendingRegistrations extends React.Component {
	
	 state = [];
	  registrationPins = [];
	   
	  getRegistration = () => {
	    	fetch('http://localhost:8080/WarrantyReg/pendingregistration', {
	            method: 'POST',
	            headers: {
	            "Accept": "application/json",
	            'Content-Type': 'application/json'
	            }, body: JSON.stringify({
					pageIndex : 1,
					pageSize : 10
				})
	        })
	        .then(response => { return response.json();})
	        .then(response => {console.log(response); return response;})
	        .then(response => {  
	        	const newWarrantyData = response.map(c => {
	                return {
	                  serial: c.serialNumber
	                };
	              });
	        	this.setState({registrationPins:newWarrantyData});
	        	})

	        .catch(err => {
	            console.log("fetch error" + err);
	        });
	};
	
	componentDidMount()
	{
		 this.getRegistration(); 
	}
	
	render()
	{
		const listItems = this.state.registrationPins;
	  	   
	  	   var arr = [];
	  	   for (var key in listItems) {
	  	     arr.push(listItems[key]);
	  	   }
	  	     const pins =  arr.map((item) => {
	  	    	  return (
	  	    			  <li><Link to="/">{item.serial}</Link></li> 
	  	    			 )
	  	          });
		return[
			    <div class="left">
			    <h4>List of all Warranty registrations</h4>
				{pins}
				</div>
		]
	}
}

export default PendingRegistrations;