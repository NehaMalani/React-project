import React from 'react';
import { Redirect } from 'react-router';
import DateComponent from './DateComponent'
import GirService from '../services/GirService';
import { connect } from "react-redux";

/**
 * Added by E5CTBU7
 */

function mapStateToProps(state) {
	return {
	  registrationObj: state.registrationObj
	};
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      saveRegistration: (regObj) =>
        dispatch({
          type: "saveRegistration",
          payload: regObj
        })
    };
  };
class WarrantyForm extends React.Component {
	  
    constructor()
    {
    	super();
      this.state = { 
        redirect : false,
        cntstlst : [],
        countryList : [
            { 
                id : 1,
                value : 'India'
            },
            {
                id : 2,
                value : 'US'
            }
        ],
        stateList : [],
        registrationObj : {}
  }
  
this.prepareCountryList = this.prepareCountryList.bind(this);
this.updateData = this.updateData.bind(this);
this.updateSerial = this.updateSerial.bind(this);
this.setDate = this.setDate.bind(this);
    }
    
    prepareCountryList(){
      let countryTemp = [];
      countryTemp = GirService.getCountryList().then(
        response => {
          this.setState({cntstlst : response.data})
        });
  }
   updateData(event)
    {
      var key = event.target.name;
      var val = event.target.value; 
      this.state.registrationObj[key] = val;
      console.log(this.state);
    }
    updateSerial()
    {
      let pin1 = document.getElementsByName("pin1")[0].value;
      let pin2 = document.getElementsByName("pin2")[0].value;
      let pin3 = document.getElementsByName("pin3")[0].value;
      let pin4 = document.getElementsByName("pin4")[0].value;
      let serailNo = pin1+pin2+pin3+pin4;
      this.state.registrationObj.serialNo = serailNo;
    }

    setDate(event)
    {
      this.state.registrationObj.date = event;
    }
    reset()
    {
      document.getElementById("warrantyReg").reset();   
    }

    submit = () => {
      this.setState({redirect: true});
      this.props.saveRegistration(this.state.registrationObj);
    }	

    render() {
    	var drpdwn = {
    			padding:'1px 0px 1px 2px',
    			color : '#8e8e8e'
    	}
      this.prepareCountryList();
        
      let optlst = this.state.countryList.map((data) =>
      <option key={data.id}
      value={data.id} >
      {data.value}
      </option>
      );

    	     if (this.state.redirect) {
            return <Redirect to={{
                  pathname: '/success',
                  state: { firstName: this.state.registrationObj.firstName }
              }}/>
              } 
                   
       return (
    <html> 
   <body>
   <div class= "container">
   <form class="form-horizontal" id = "warrantyReg">
    <div class="form-group fieldStyle">
      <div><font class="red">*</font>
      <i>Required Fields</i>
      </div>
      <div>
      <i>Please enter either Company name or First Name and Last Name</i>
      </div>
    </div>

   <div><h5 class="bold">Purchaser Information</h5></div>
   <div class="form-group">
   <label class="control-label col-sm-2" for="companyName"><font class="red">*</font>Company Name :</label>
   <div class="col-sm-10">
     <input type="text" class="form-control" id="companyName" placeholder="Enter Company Name"></input>
   </div>
   </div>
   
   <div class="form-group lightgrey bold shiftLeft">
   OR
   </div>

   
   <div class="form-group">
   <label class="control-label col-sm-2" for="firstName"><font class="red">*</font>First Name :</label>
   <div class="col-sm-10">
     <input type="text" name = "firstName" value = {this.state.registrationObj.firstName} onChange ={this.updateData}  class="form-control" id="firstName" placeholder="Enter First Name"></input>
   </div>
   </div>

   <div class="form-group">
   <label class="control-label col-sm-2" for="lastName"><font class="red">*</font>Last Name :</label>
   <div class="col-sm-10">
     <input type="text" name = "lastName" value = {this.state.registrationObj.lastName} onChange ={this.updateData} class="form-control" id="lastName" placeholder="Enter Last Name"></input>
   </div>
   </div>
   
   <div class="form-group">
   <label class="control-label col-sm-2" for="telephone"> Telephone :</label>
   <div class="col-sm-10">
     <input type="text" name = "telephone" value = {this.state.registrationObj.phone} onChange ={this.updateData} class="form-control" id="telephone" placeholder="Enter Telephone"></input>
   </div>
   </div>
   
   <div class="form-group">
   <label class="control-label col-sm-2" for="streetAddress"><font class="red">*</font>Street Address :</label>
   <div class="col-sm-10">
     <input type="text" name = "address1" value = {this.state.registrationObj.address1} onChange ={this.updateData} class="form-control" id="streetAddress" placeholder="Enter Street Address"></input>
   </div>
   </div>
   
   <div class="form-group">
   <label class="control-label col-sm-2" for="address2"> Address Line 2 :</label>
   <div class="col-sm-10">
     <input type="text" name = "address2" value = {this.state.registrationObj.address2} onChange ={this.updateData} class="form-control" id="address2" placeholder="Enter Address Line 2"></input>
   </div>
   </div>
   
   <div class="form-group">
   <label class="control-label col-sm-2" for="city"><font class="red">*</font> City :</label>
   <div class="col-sm-10">
     <input type="text" name = "city" value = {this.state.registrationObj.city} onChange ={this.updateData} class="form-control" id="city" placeholder="Enter City"></input>
   </div>
   </div>
   
   <div class="form-group">
   <label class="control-label col-sm-2" for="country"><font class="red">*</font>Country :</label>
   <div class="col-sm-10">
     <select class="form-control" name = "country" value = {this.state.registrationObj.country} onChange ={this.updateData} style={drpdwn} id="country">
     <option value="-1">Select Country</option>
     {optlst}
     </select>
   </div>
   </div>
   
   <div class="form-group">
   <label class="control-label col-sm-2" for="state"><font class="red">*</font>State/Prov :</label>
   <div class="col-sm-10">
     <select value = {this.state.registrationObj.state} name = "state" class="form-control" onChange ={this.updateData} style={drpdwn} id="state">
     <option value="-1">Select State</option>
     <option></option>
     </select>
   </div>
   </div>
   
   <div class="form-group">
   <label class="control-label col-sm-2" for="zip"><font class="red">*</font>Zip/Postal Code :</label>
   <div class="col-sm-10">
     <input type="text" name ="zip" value = {this.state.registrationObj.zip} onChange ={this.updateData} class="form-control" id="zip" placeholder="Enter Zip/Postal Code"></input>
   </div>
   </div>
   
   <div class="form-group">
   <label class="control-label col-sm-2" for="productGroup">Product Group :</label>
   <div class="col-sm-10">
     <select name ="productGrp" value = {this.state.registrationObj.productGrp} onChange ={this.updateData} class="form-control" style={drpdwn} id="productGrp">
     <option value="-1">Select Product Group</option>
     <option></option>
     <option></option>
     </select>
   </div>
   </div>
   
   <div class="form-group">
   <label class="control-label col-sm-2" for="email">E-Mail :</label>
   <div class="col-sm-10">
     <input name = "email" type="email" value ={this.state.registrationObj.email} onChange ={this.updateData} class="form-control" id="email" placeholder="Enter E-Mail"></input>
   </div>
   </div>
   
   <div class="form-group">
   <label class="control-label col-sm-2" for="purchasertype"><font class="red">*</font>Purchaser Type :</label>
   <div class="col-sm-10">
     <select name = "purchaserType" onChange ={this.updateData} class="form-control" value ={this.state.registrationObj.purchaserType} style={drpdwn} id="purchasertype">
     <option value="-1">Select Product Group</option>
     <option></option>
     <option></option>
     </select>
   </div>
   </div>
   
   <div><h5 class="bold">Product And Equipment Information</h5></div>
   
   <div class="form-group">
   <label class="control-label col-sm-2" for="pin"><font class="red">*</font>Product Serial Number:</label>
   <div class="col-sm-10">
   <input class="rounded width72" type="text" name="pin1" maxLength="2"/>&nbsp;
   <input class="rounded width72" type="text" name="pin2" maxLength="4"/>&nbsp;
   <input class="rounded width72" type="text" name="pin3" maxLength="1"/>&nbsp;
   <input class="rounded width72" type="text" name="pin4" maxLength="6" onBlur ={this.updateSerial}/>&nbsp;
   </div>
   </div>
   
   <div class="form-group">
   <label class="control-label col-sm-2" for="date"><font class="red">*</font>Date Delivered :</label>
   <div class="col-sm-10">
   <DateComponent onSelectDate={this.setDate} ></DateComponent>
   </div>
   </div>
   
   <div class="form-group">
   <label class="control-label col-sm-2" for="usageAmount"><font class="red">*</font>Amount Of Use :</label>
   <div class="col-sm-10">
     <input type="text" class="form-control" onChange ={this.updateData} name ="usageAmount" placeholder="Enter Amount Of Use"></input>
   </div>
   </div>
   
   <div class="form-group">
   <label class="control-label col-sm-2" for="usetype"><font class="red">*</font>Use Type :</label>
   <div class="col-sm-10">
   <input type="radio" onChange ={this.updateData} class="form-check-input" value="hours" name="unit"></input>
   <label class="form-check-label" for="hours">Hours</label>
   <input type="radio" onChange ={this.updateData} class="form-check-input" value="miles" name="unit"></input>
   <label class="form-check-label" for="miles">Miles</label>
   </div>
   </div>

   <div class="form-group">
   <label class="control-label col-sm-2" for="equipmenttype"><font class="red">*</font>Equipment Type :</label>
   <div class="col-sm-10">
   <select class="form-control" style={drpdwn} id="equipType">
     <option value="-1">Select Equipment Type</option>
     <option></option>
     <option></option>
     </select>
   </div>
   </div>

   <div class="form-group">
   <label class="control-label col-sm-2" for="status"><font class="red">*</font>Status :</label>
   <div class="col-sm-10">
   <select class="form-control" style={drpdwn} id="status">
     <option value="-1">Select Status</option>
     <option></option>
     <option></option>
     </select>
   </div>
   </div>

   <div class="form-group">
   <label class="control-label col-sm-2" for="comments">Comments :</label>
   <div class="col-sm-10">
   <textarea name = "comment" onChange ={this.updateData} class="form-control"></textarea>
   </div>
   </div>

   <div class="form-group">
   <label class="control-label col-sm-2" for="promotionCode">Promotion Code :</label>
   <div class="col-sm-10">
     <input type="text" onChange ={this.updateData} name = "promotion" class="form-control" id="city" placeholder="Enter Promotion Code"></input>
   </div>
   </div>
   
   <div class="lightgrey">
   <button type="button" class="btn btn-default" onClick = {this.submit}>Submit</button>&nbsp;
   <button type="button" class="btn btn-default left" onClick = {this.reset}>Reset</button>
   </div>
 
  </form>  
</div>

 </body>
</html>
  );  
  }
    }
export default connect(mapStateToProps,mapDispatchToProps)(WarrantyForm);
