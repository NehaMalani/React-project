import React from 'react';

/**
 * Added by E5CTBU7
 */
class Notfound extends React.Component {
	
render ()
{
	return[
		<div>
		<h4>Page not found</h4>	
		<p>{this.props.title}</p>
		</div>,
		<div>
		{ this.props.obj.map(
			x =>x.name+x.city
		)}
		</div>
		
	 ]
}

}
export default Notfound;