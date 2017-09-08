import React from 'react';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
 


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