import React from 'react';
import BlockRow from './BlockRow';
import api from '../utils/equations'
import StartGame from './StartGame'

export default class MainContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			board:api.generateGrid(),
			gameRunning:true,
			interval:undefined,
		}
		this.handleBlockState = this.handleBlockState.bind(this);
		this.regenerateBoard = this.regenerateBoard.bind(this);
	}
	handleBlockState(Xpos,Ypos){
		var newBoard = this.state.board;
		newBoard[Xpos][Ypos].currentState = !this.state.board[Xpos][Ypos].currentState
		console.log(Xpos,Ypos);
		this.setState((prevState) => ({
			board: newBoard
		}))
	}
	regenerateBoard(){
		this.setState((prevState) => ({
				gameRunning:!prevState.gameRunning

			})
			);
		console.log(this.state.gameRunning)
		if(this.state.gameRunning){
			var interval = setInterval(function(){ 
			var newBoard = api.getStateFromNeighbours(this.state.board);
			this.setState((prevState) => ({
				board: newBoard,
			})
			);

			}.bind(this), 150);
			this.setState((prevState) => ({
				interval:interval,

			})
			);
		}else{
			clearInterval(this.state.interval);
			this.setState((prevState) => ({
				interval:undefined

			})
			);
		}
	}
	render() {
		return(
			<div className="boardWrapper">
			<div className="containerBoard">
			{this.state.board.map(function(element,index){
				return <BlockRow indexValue={index} key={index+="row"} value={element} toggleState={this.handleBlockState} />
			}.bind(this))
			}
			</div>
			<StartGame startGame={this.regenerateBoard} running={this.state.gameRunning} />
			</div>
		);
	}
}