import React from 'react';
import './TweetBtn.css';

const TweetBtn = ({txt, author}) => {
	return (
		<a className="btn" id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=eloquent-javascript&text="${txt}" ${author}`} target="_blank" rel="noreferrer" rel="noopener">Tweet</a>
	);
}

export default TweetBtn;