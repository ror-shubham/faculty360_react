import React from 'react';
import Slider      from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import './index.css';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
var $ = require('jquery');



 

const SliderArea = React.createClass({
    getInitialState: function(){
        return ({
            details: [{
                title: "Management",
                title_icon: "",
                branches: ["Design", "IT", "Civil", "Mech", "GT"]

            },
            {
                title: "Management",
                title_icon: "",
                branches: ["IT", "Civil","Design", "Mech", "GT", "Design", "IT", "Civil", "Mech", "GT"]

            },
            {
                title: "Management",
                title_icon: "",
                branches: ["Design", "IT", "Civil", "Mech", "GT"]

            },
            {
                title: "Management",
                title_icon: "",
                branches: ["Design", "IT", "Civil", "Mech", "GT"]

            }]
        });
    },
    render: function () {
       

        var slider_cards = this.state.details.map(function(card_detail, index){
            return <div className="slidercard"><SliderCard details = {card_detail} key = {index}/></div>
        });             

        return (
            <div className="slick container">
                {slider_cards}
            </div>
        );
    }
});

const SliderCard = React.createClass({
    render: function(){
        var branches = this.props.details.branches.slice(0,5).map(function(branch, index){
            return <button type="button" className="btn btn-default" key={index}>{branch}</button>
        });
        console.log(branches)
        branches.push(<button type="button" className="btn btn-default" key="5">{"+"+(this.props.details.branches.length-5)}</button>);
        return(
            <div className=" well well-lg paddingzero">
                <div className="sliderpapertitle"><h3>{this.props.details.title}</h3></div>
                <Divider/>
                <div className="sliderpapertext">Select Branch</div>
                <div className="sliderpaperbuttons">{branches}</div>
            </div>
            
        );
    }
});

$(document).ready(function(){
    $('.slick').slick({
        dots: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
        ],
    });
});

export default SliderArea;