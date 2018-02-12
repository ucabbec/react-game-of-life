import React from 'react';

export default class StartGame extends React.Component {
	render() {
		return(
			<div className='button' onClick={this.props.startGame}>
				{this.props.running ? <p>Start Simulation</p>:<p>Stop Simulation</p> }
			</div>
		)
	}
} 