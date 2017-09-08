import React from 'react';
import SearchBar from 'material-ui-search-bar'
import SearchIcon from 'material-ui/svg-icons/action/search'
import {black} from 'material-ui/styles/colors'
 
var searchIcon=<SearchIcon color={black} />
var SearchBarArea = () => (
	<div className='searchbararea padding-top-50 padding-bottom-50'>
		<h1 className='text-center padding-bottom-20'
        style={{
            color: 'white',
            fontFamily: 'Raleway',
            
            }}>
        Find the right job, right now</h1>
		<SearchBar
			onChange={() => console.log('onChange')}
			onRequestSearch={() => console.log('onRequestSearch')}
            hintText={"Search skills,roles and specialization"}
			style={{
			margin: '0 auto',
			maxWidth: 800,
			}}
			iconButtonStyle={{
				background: "rgb(253,182,0)"
			}}
			searchIcon={searchIcon}
		/>
	</div>
);

export default SearchBarArea;