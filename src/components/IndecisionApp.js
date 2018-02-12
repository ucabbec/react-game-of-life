import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options:[],
			selectedOption:undefined
		}
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleDecision = this.handleDecision.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.handleSelectedOptionRemove = this.handleSelectedOptionRemove.bind(this);
	}
	handleDeleteOptions(){
		this.setState( () => ({options:[]}))
	}
	handleDeleteOption(option){
		this.setState((prevState) => ({
			options: prevState.options.filter((value)=> {
				return value != option
			})
		}))
	}
	handleDecision(){
		const option = this.state.options[Math.floor(Math.random()*this.state.options.length)];
		this.setState((prevState) => ({
			selectedOption: option
		}))
	}
	handleSelectedOptionRemove(){
		this.setState((prevState) => ({
			selectedOption: undefined
		}))
	}
	handleAddOption(option){
		if(!option){
			return 'Enter valid value to add item'
		}else if(this.state.options.indexOf(option)>-1){
			return 'Item already exists'
		}
		this.setState( (prevState) => ( { options: prevState.options.concat([option]) } ) )
	}
	render() {
		const app = {
			title:"Indecision App!!!",
			subtitle: "Put your life in the hands of a computer!!!",
			options:["Thing One", "Thing Two", "Thing three"]
		}
		return(
			<div>
				<Header title={app.title} subtitle={app.subtitle} />
				<div className="container">
					<Action handleDecision={this.handleDecision} hasOptions={!this.state.options.length > 0} />
					<div className="widget">
						<Options 
							options={this.state.options}
							handleDeleteOptions={this.handleDeleteOptions} 
							handleDeleteOption={this.handleDeleteOption}
							/>
						<AddOption handleAddOption={this.handleAddOption}/>
						</div>
				</div>
				<OptionModal selectedOption={this.state.selectedOption} removeSelectedOption={this.handleSelectedOptionRemove}/>
			</div>
		);
	}
}