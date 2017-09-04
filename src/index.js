import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderArea from './HeaderArea';
import SearchBarArea from './SearchBarArea';
import SliderArea from './SliderArea';
import ContentArea from './ContentArea';
import FooterArea from './FooterArea';



var App = () => (
  <MuiThemeProvider>
    <div>
		<HeaderArea/>
	    <SearchBarArea/>
	    <SliderArea/>
	    <ContentArea/>
	    <FooterArea/>
	</div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);