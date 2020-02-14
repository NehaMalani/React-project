import React from 'react';
import { connect } from "react-redux";

// const mapStateToProps = state => ({ obj: state.display })
  function mapStateToProps(state) {
	return {
        registrationObj: state.registrationObj,
        flag : state.display
	};
  }

class ViewRegistration extends React.Component {
   
  
    render()
    {
        const regData = this.props.registrationObj;
        let custData;
        if(this.props.location.state!==undefined)
	    { 
            custData = this.props.location.state.data;
        }
        return(
            <html> 
            <body>
    <div class= "container">
    <div class="row">
    <div class="col-lg-6">

    <div class="form-group fieldStyle">
    <div><h5 class="bold shift">Purchaser Information</h5>
   
    </div>
    </div>

    <div class="form-group">
    <div class="col-lg-6 col-sm-12"><label class="control-label" for="customerId">Customer Id :</label></div>
    <div class="col-lg-6 col-sm-12"><input type="text" class="field-style" id="customerId" ></input>
    </div>
    </div>

    <div class="form-group">
    <div class="col-lg-6 col-sm-12 width10"><label class="control-label" for="firstName">First Name :</label></div>
    <div class="col-lg-6 col-sm-12"><input type="text" class="field-style" id="firstName" value = {custData.custFirstName} ></input>
    </div>
    </div>

    <div class="form-group">
    <div class="col-lg-6 col-sm-12 width10"><label class="control-label" for="lastName">Last Name :</label></div>
    <div class="col-lg-6 col-sm-12"><input type="text" class="field-style" id="lastName" value = {custData.custLastName} ></input>
    </div>
    </div>

    <div class="form-group">
    <div class="col-lg-6 col-sm-12 width10"><label class="control-label" for="email">E-mail :</label></div>
    <div class="col-lg-6 col-sm-12"><input type="text" class="field-style" id="phone" value = {custData.email} ></input>
    </div>
    </div>

    <div class="form-group">
    <div class="col-lg-6 col-sm-12 width10"><label class="control-label" for="phone">Telephone :</label></div>
    <div class="col-lg-6 col-sm-12"><input type="text" class="field-style" id="phone" value = {custData.Telephone} ></input>
    </div>
    </div>

    <div class="form-group">
    <div class="col-lg-6 col-sm-12 width10"><label class="control-label" for="address1">Street Address :</label></div>
    <div class="col-lg-6 col-sm-12"><input type="text" class="field-style" id="address1" value = {custData.Address1} ></input>
    </div>
    </div>

    <div class="form-group">
    <div class="col-lg-6 col-sm-12 width10"><label class="control-label" for="address2">Address Line 2 :</label></div>
    <div class="col-lg-6 col-sm-12"><input type="text" class="field-style" id="address2" value = {custData.Address2} ></input>
    </div>
    </div>

    <div class="form-group">
    <div class="col-lg-6 col-sm-12 width10"><label class="control-label" for="city">City :</label></div>
    <div class="col-lg-6 col-sm-12"><input type="text" class="field-style" id="city" value = {custData.custCity} ></input>
    </div>
    </div>

    <div class="form-group">
    <div class="col-lg-6 col-sm-12 width10"><label class="control-label" for="state">State/Prov :</label></div>
    <div class="col-lg-6 col-sm-12"><input type="text" class="field-style" id="state" value = {custData.custStateProvince} ></input>
    </div>
    </div>

    <div class="form-group">
    <div class="col-lg-6 col-sm-12 width10"><label class="control-label" for="zip">Zip/Postal Code :</label></div>
    <div class="col-lg-6 col-sm-12"><input type="text" class="field-style" id="zip" value = {custData.custPostalCode} ></input>
    </div>
    </div>

    <div class="form-group">
    <div class="col-lg-6 col-sm-12 width10"><label class="control-label" for="purchaserType">Purchaser Type :</label></div>
    <div class="col-lg-6 col-sm-12"><input type="text" class="field-style" id="purchaserType" value = {custData.purchaserType} ></input>
    </div>
    </div>

    <div class="form-group">
    <div class="col-lg-6 col-sm-12 width10"><label class="control-label" for="country">Country :</label></div>
    <div class="col-lg-6 col-sm-12"><input type="text" class="field-style" id="country" value = {custData.custCountry} ></input>
    </div>
    </div> 
    </div>
    <div class = "col-lg-6">  

  
    <div class="form-group fieldStyle">
    <div><h5 class="bold shift">Equipment Information</h5></div>
    </div>
  
  
    <div class="form-group">
    <div class="col-lg-6 col-sm-12 width10"><label class="control-label" for="serialNo">Engine Serial Number :</label></div>
    <div class="col-lg-6 col-sm-12"><input type="text" class="field-style" readOnly id="serialNo" value = {custData.serialNumber} ></input>
    </div>
    </div>  
    </div>
   </div>
   </div>
    </body>
    </html>
          

        )
    }
}

export default connect(mapStateToProps)(ViewRegistration);