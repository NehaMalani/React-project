import React from 'react';
import axios from 'axios';

class GirService extends React.Component {

    constructor(){
        super();
        this.getCountryList = this.getCountryList.bind(this);
        this.getPendingRegistration = this.getPendingRegistration.bind(this);
        
    }
     name = "E5CTBU7";
    registrationObj = {};
    
    getCountryList(){
       return axios.get('http://localhost:8080/WarrantyReg/getcountrylist');
    }

    getStateList(selectedCountry){
        return axios.post('http://localhost:8080/WarrantyReg/getstatelist',selectedCountry);
    }

    getPendingRegistration()
    {   return axios.get('http://localhost:8080/WarrantyReg/home/registration'); }
}

export default new GirService();