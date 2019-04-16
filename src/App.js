import React, { Component } from 'react';
import Quotes from './Quotes';
import Quote from './Quote';
import TweetBtn from './TweetBtn';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentQuote: null
		};
		this.getNewQuote = this.getNewQuote.bind(this);
	}
	
	getNewQuote() {
		const randIndex = Math.floor(Math.random() * Quotes.length);
		this.setState({currentQuote: Quotes[randIndex]});
	}
	
	componentDidMount() {
		this.getNewQuote();
	}
	
	render() {
		const currentQuote = this.state.currentQuote;
		return (
			<div className="app-wrapper">
				<div id="quote-box" className="quote-box">
					{this.state.currentQuote ? <Quote {...currentQuote}/> : null}
					<div className="btn-panel">
						<div id="new-quote">
							<button className="btn" onClick={this.getNewQuote}>New quote</button>
						</div>
						<TweetBtn {...currentQuote}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;