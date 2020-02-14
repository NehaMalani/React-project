import React from 'react';
import ReactTableComponent from './ReactTableComponent.js';
import GirService from '../../services/GirService';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

export default class PendingRegistrations extends React.Component 
{
	constructor()
	{
	super();
	this.getPendingRegistration = this.getPendingRegistration.bind(this);
	this.getPendingRegistration();
	this.state = {
		registrationData : [],
		redirect : false,
		data :  false
	};
	}
	
	getPendingRegistration() {
		// const view = <Redirect to={{
        //           pathname: '/viewRegistration',
        //           state: { id: 15 }
        //       }}/>

		// const view = <Link to={{
		// 	pathname: '/viewRegistration',
		// 	state: {
		// 	  data: { id: 7, color: 'green' }
		// 	}
		//   }} class="anchor">View/Edit</Link>;

		GirService.getPendingRegistration()
		 .then(response => { 
			 this.setState({data:true});
		   let newWarrantyData = response.data.map(item => {
				 return {
					serialNumber: item.serialNumber,
				    registrationType:item.serialNumber,
				    date: item.dateSubmitted,
					status: item.statusIndicator,
					view : <Link to={{
						pathname: '/viewRegistration',
						state: {
						  data: item
						}
					  }} class="anchor">View/Edit</Link>
				 }; 
			   });
		   this.setState({registrationData:newWarrantyData}); 
		   })
	
		 .catch(err => {
			 console.log("fetch error" + err);
		 });
	};
	  
    render()
    {			  
        return[
			<div className = { (this.state.data ? "hide" : "show spin")}>
			<Loader type="Circles" color="#008000" height={60} width={60}/>
			</div>, 
            <div className = { (this.state.data ? "show tableStyle" : "hide")}>
           	 <ReactTableComponent regData = {this.state.registrationData}/>
			</div> 
	
		]
    }
}


