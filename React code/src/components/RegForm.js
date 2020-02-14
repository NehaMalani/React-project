import React from 'react';
import WarrantyFormTemp from './WarrantyFormTemp';

/**
 * Added by E5CTBU7
 */
class RegForm extends React.Component {
    constructor() {
    super();
    }
    
    state = [];
    registrationPins = [];
    name = '';
    
    getData = () => {
    	fetch('http://localhost:8080/WarrantyReg/admin/map', {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        }
    })
    .then(response => { return response.json();})
    .then(response => {console.log(response); return response;})
    .then(response => {  
    	this.setState({ id: response.id, name : response.name });
    	})

    .catch(err => {
        console.log("fetch error" + err);
    });
};

   componentDidMount() {
	    //setInterval(this.getData, 1000);
       
    }
   

   
   render ()
   {
	
	   if(this.state!== undefined && this.state !=='' && this.state !== null)
   {
      return [
    	       
              <WarrantyForm></WarrantyForm>
      ];
   }
   }
    
    }  

    export default RegForm;