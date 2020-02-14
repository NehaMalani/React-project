import React , {Component} from 'react';
import { connect } from "react-redux";
import { showAction } from '../store/actions/showAction';
import { hideAction } from '../store/actions/hideAction';

/**
 * Added by E5CTBU7
 */

 // const mapStateToProps = state => ({ obj: state.display })
  function mapStateToProps(state) {
	return {
	  flag: state.display
	};
  }

  
  function mapDispatchToProps(dispatch){
	return({
	 showAction: () => {dispatch(showAction)},
	 hideAction: () => {dispatch(hideAction)}
	})
  }

class SubmitResults extends Component {

	
	show = () => {
		this.props.showAction();
	  }; 
	hide = () => {
		this.props.hideAction();
	  };	

   render ()
  {
	let name;
	if(this.props.location.state.firstName!==undefined)
	{ name = this.props.location.state.firstName;}

	return[
		<div>
        {this.props.flag.display}
		</div>,
		<div className = { (this.props.flag ? "show" : "hide")}>
		<h4>Warranty registration of <strong>{name}</strong> is successful !!</h4>	
		</div>,
		<div id="wrapper">
		<div id="one">one one one one one one one one one one one one one one one one one one one one one</div>
		<div id="two">two two two two two two</div>
		<div id="three">three</div>
	</div>
	]
}

}
export default connect(mapStateToProps,mapDispatchToProps)(SubmitResults);