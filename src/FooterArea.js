import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import logo from './logo.png'

const recentsIcon = <FontIcon className="material-icons">Home</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">Tool</FontIcon>;
const rankingsIcon = <FontIcon className="material-icons">Rankings</FontIcon>;
const careersIcon = <FontIcon className="material-icons">Careers</FontIcon>;
const faculty360 = <FontIcon className="material-icons">FACULTY360</FontIcon>;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class FooterArea extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          
            <img src={logo}/>
          
          <BottomNavigationItem
            icon={recentsIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            icon={favoritesIcon}
            onClick={() => this.select(2)}
          />
          <BottomNavigationItem
            icon={rankingsIcon}
            onClick={() => this.select(3)}
          />
          
        </BottomNavigation>
      </Paper>
    );
  }
}

export default FooterArea;