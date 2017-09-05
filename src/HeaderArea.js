import React from 'react';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
 

var HeaderArea = () => (
	<AppBar
    title={<span >Title</span>}
    //onTitleTouchTap={handleTouchTap}
    //iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    //iconElementRight={<FlatButton label="Save" />}
  />
);

export default HeaderArea;