import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import logo from './logo.png'
import Paper from 'material-ui/Paper'; 




var HeaderArea = () => (
	<nav className="navbar navbar-inverse" style={{margin:0,borderRadius:0,}}>
	  <div className="container-fluid">
	    <div className="navbar-header" style={{float:'left',}}>
	      <a className="navbar-brand" href="#">WebSiteName</a>
	    </div>
	    <ul className="nav navbar-nav" style={{float:'right',}}>
	      <li style={{float:'right',}}><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
	      <li style={{float:'right',}}><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
	    </ul>
	  </div>
	</nav>
);
export default HeaderArea;

