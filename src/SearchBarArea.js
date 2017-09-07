import React from 'react';
import SearchBar from 'material-ui-search-bar'
 

var SearchBarArea = () => (
	<div className='searchbararea padding-top-50 padding-bottom-50'>
		<h1 className='text-center padding-bottom-20'>Find the right job, right now</h1>
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