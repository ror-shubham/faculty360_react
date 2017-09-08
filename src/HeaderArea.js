import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import logo from './logo.png'
import Paper from 'material-ui/Paper'; 




var HeaderArea = () => (
	<nav className="navbar" style={{margin:0,borderRadius:0,}}>
	  <div className="container-fluid">
	    <div className="navbar-header" style={{float:'left',}}>
	      <a className="navbar-brand" href="#"><img src={logo} className="img-responsive" width="150" height="150"/></a>
	    </div>
	    <div className="btn-group" data-toggle="buttons" style={{float:'right',}}>
  <label className="btn btn-sm">
    <input type="radio" name="options" id="option1" autocomplete="off"/> LOG IN
  </label>
  <label className="btn btn-sm active">
    <input type="radio" name="options" id="option2" autocomplete="off" checked/> SIGN UP
  </label>
  
</div>
	  </div>
	</nav>
);
export default HeaderArea;


