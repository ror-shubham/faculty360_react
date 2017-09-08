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
      <div>    
      <footer className="container-fluid hidden-xs">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#"><img src={logo} className="img-responsive" width="150" height="150"/></a>
            </div>
            <ul className="nav navbar-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Tool</a></li>
              <li><a href="#">Ranking</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </nav>
        <nav className="navbar">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Sleep</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Copyright @ 2017 Careers360 </a></li>
            </ul>
          </div>
        </nav>
      </footer>
    
      <footer className="container-fluid hidden-sm hidden-lg hidden-md paddinglr">
        <nav className="navbar col-xs-12 padding0">
          <div className="container-fluid col-xs-12 padding0">
            <div className=" col-xs-12 flex padding0">
              <a className="navbar-brand" href="#"><img src={logo} className="img-responsive" width="150" height="150"/></a>
            </div>
            <ul className="nav navbar-nav list-inline padding0 margin0">
              <li className="col-xs-3 text-center padding0"><a href="#">Home</a></li>
              <li className="col-xs-3 text-center padding0"><a href="#">Tool</a></li>
              <li className="col-xs-3 text-center padding0"><a href="#">Ranking</a></li>
              <li className="col-xs-3 text-center padding0"><a href="#">Careers</a></li>
            </ul>
          </div>
        </nav>
        <nav className="navbar col-xs-12 padding0 margin0">
          <div className="container-fluid col-xs-12 padding0">
            <ul className="nav navbar-nav list-inline padding0">
        
              <li className="col-xs-4 text-right padding0"><a href="#">Privacy</a></li>
              <li className="col-xs-4 text-center padding0"><a href="#">Sitemap</a></li>
              <li className="col-xs-4 text-left padding0"><a href="#">Sleep</a></li>
              <li className="col-xs-12 text-center padding0"><a href="#">Copyright @ 2017 Careers360 </a></li>
            </ul>
          </div>
        </nav>
      </footer>
      </div>
    );
  }
}

export default FooterArea;