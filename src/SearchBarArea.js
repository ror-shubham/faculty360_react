import React from 'react';
import SearchBar from 'material-ui-search-bar'
 

var SearchBarArea = () => (
	<div>
		<h2>Find the right job, right now</h2>
		<SearchBar
			onChange={() => console.log('onChange')}
			onRequestSearch={() => console.log('onRequestSearch')}
			style={{
			margin: '0 auto',
			maxWidth: 800
			}}
		/>
	</div>
);

export default SearchBarArea;