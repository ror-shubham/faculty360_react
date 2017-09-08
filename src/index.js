import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderArea from './HeaderArea';
import SearchBarArea from './SearchBarArea';
import SliderArea from './SliderArea';
import ContentArea from './ContentArea';
import FooterArea from './FooterArea';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const muiTheme = getMuiTheme({
  fontFamily: 'Arial'
   
});



var App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
		<HeaderArea/>
	    <SearchBarArea/>
	    <SliderArea/>
	    <ContentArea/>
	    
	</div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);