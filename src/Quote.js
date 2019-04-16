import React from 'react';
import TweetBtn from './TweetBtn';

const Quote = ({txt, author, src}) => (
	<div className="quote">
		<div id="text">
			{txt}
		</div>
		<div id="author">
			{author}
		</div>
		<div id="source">
			<a href={src} target="_blank" rel="noopener" rel="noreferrer">Go to source</a>
		</div>
	</div>
);

export default Quote;