import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import './index.css';
import Divider from 'material-ui/Divider';
var $ = require('jquery');


function SliderCard(props){
    var branches = props.details.branches.slice(0,5).map(function(branch, index){
            return <button type="button" className="btn btn-default jobcardbutton" key={index}>{branch}</button>
        });
    if (props.details.branches.length<=5){
        return(
            <div className=" well well-lg jobcardwell">
                    <div className="sliderpapertitle"><h3>{props.details.title}</h3></div>
                    <Divider/>
                    <div className="sliderpapertext">Select Branch</div>
                    <div className="sliderpaperbuttons">{branches}</div>
                </div>
            )
    }
    branches.push(<button type="button" className="btn btn-default jobcardbutton" key="5"
            >{"+"+(props.details.branches.length-5)}</button>)
    return(
            <div className=" well well-lg jobcardwell">
                    <div className="sliderpapertitle"><h3>{props.details.title}</h3></div>
                    <Divider/>
                    <div className="sliderpapertext">Select Branch</div>
                    <div className="sliderpaperbuttons">{branches}</div>
                </div>
            )
}
 

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
            <div>
                <h1 className="text-center padding-top-20 h1grey">Now explore over 3,200 faculty jobs in India</h1>
                <div className="slick container">
                    {slider_cards}
                </div>
            </div>
        );
    }
});




$(document).ready(function(){
    $('.slick').slick({
        dots: false,
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