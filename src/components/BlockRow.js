import React from 'react';
import Block from './Block';

export default class BlockRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			unit:this.props.value,
			index:this.props.indexValue,
		}
	}
	// componentDidUpdate(){
	// 	console.log(this.state.unit);
	// }
	render() {
		return(
			<div className = "blockRow">
			{this.state.unit.map(function(element,index){
				return <Block key={element.index} index={index} parentIndex={this.state.index} toggleState={this.props.toggleState} value={element} />
			}.bind(this))
			}
			</div>
		);
	}
}