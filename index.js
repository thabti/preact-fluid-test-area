import './style';
import { Component } from 'preact';
import { Button } from 'preact-fluid-test'
export default class App extends Component {
	render() {
		return (
			<div>
				<Button> Hello </Button>
				<h1>Hello, World!</h1>
			</div>
		);
	}
}
