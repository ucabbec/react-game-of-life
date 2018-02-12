import React from 'react';


export default class Block extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			highlighted:this.props.value.currentState,
			XCoord:this.props.parentIndex,
			YCoord:this.props.index,

		}
		this.showCoordinates=this.showCoordinates.bind(this);
	}
	showCoordinates(){
		this.props.toggleState(this.state.XCoord,this.state.YCoord);
	}
	styleComponent(){
		return this.state.highlighted ? 'black' : 'white'
	}
	componentDidUpdate(){
		if(this.props.value.currentState !== this.state.highlighted){
			this.setState((prevState) => ({
				highlighted: this.props.value.currentState
			}))
		}
	}
	render() {
		return(
			<div onClick={this.showCoordinates} className={this.props.value.currentState ? 'blockStylingToggle' : 'blockStyling'}>
			</div>
		);
	}
}