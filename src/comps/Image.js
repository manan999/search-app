import React from 'react' ;

class Image extends React.Component
{	constructor(props)
	{	
		super(props) ;
		this.imageRef = React.createRef() ;
		this.state = {
			spans : 0 ,
		} 
	}

	componentDidMount = () => {
		this.imageRef.current.addEventListener('load', this.setSpan) ;
	} 

	setSpan = () => {
		const ht = this.imageRef.current.clientHeight ;

		const span = Math.ceil(ht/10) ;
		this.setState({spans: span})
	}

	render()
	{
		return ( 
			<div style={ { gridRowEnd : `span ${this.state.spans}` } }>
				<img ref={this.imageRef} src={this.props.url} alt={this.props.desc} />
			</div>
			) ;
	}
}

export default Image ;