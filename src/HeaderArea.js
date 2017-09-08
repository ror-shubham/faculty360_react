import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import logo from './logo.png'
import Paper from 'material-ui/Paper'; 


<<<<<<< Updated upstream


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

=======

var HeaderArea = () => (
	<nav className="navbar">
	  <div className="container-fluid row">
	    <div className="navbar-header col-xs-5 col-sm-3">
	      <a className="navbar-brand" href="#"><img className="img-responsive" height="170" width="170" src={logo}></img></a>
	    </div>
	    <div className="col-xs-2 col-sm-6">
	    </div>
	    <div className="nav navbar-nav navbar-right col-xs-5 col-sm-3 row">
	      <button label="LOG IN" className="btn col-xs-6 responsive-width">LOGIN</button>
		  <button label="SIGN UP" primary={true} className="btn col-xs-6 responsive-width">SIGN UP</button>
	    </div>
	  </div>
	</nav>
	
>>>>>>> Stashed changes
);

export default HeaderArea;

