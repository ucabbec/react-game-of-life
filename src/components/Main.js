import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';

export default class Main extends React.Component {
	render() {
		return(
			<div>
			<Header title="Conways Game of Life">Hello</Header>
			<MainContainer />
			</div>
		);
	}
}