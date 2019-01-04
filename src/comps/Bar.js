import React from 'react' ;

const initState = {
	input : '' ,
}

class Bar extends React.Component {
	constructor(props)
	{	super(props) ;
		this.state = initState ;
	}

	onTextChange = (event) => {
		console.log(event.target.value) ;
		this.setState({ input : event.target.value}) ;
	}

	onFormSubmit = (event) => {
		event.preventDefault() ;
		this.props.onSubmit(this.state.input) ;
	}

	render()
	{	return (
			<div className="ui segment sBar"> 
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<input type="text" value={this.state.input} onChange={this.onTextChange}/>
					</div>
				</form>
			</div>
			) ;
	}
}

export default Bar ;