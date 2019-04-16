import React from 'react';
import './Quote.css';

const Quote = ({txt, author, src}) => (
	<div className="quote">
		<div className="quote-text" id="text">
			"{txt}"
		</div>
		<div className="quote-author" id="author">
			- {author}
		</div>
		<div className="quote-src" id="source">
			<a href={`http://eloquentjavascript.net${src}`} target="_blank" rel="noopener" rel="noreferrer">Go to source</a>
		</div>
	</div>
);

export default Quote;