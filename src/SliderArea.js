import React from 'react';
import Slider      from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
//import 'slick-carousel/slick/slick.css';
import './index.css';
import Paper from 'material-ui/Paper';

 

const SliderArea = React.createClass({
    render: function () {
        var settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            className: 'slides',
            centerMode: true
    };

    getInitialState: function(){
        return {
            details: {
                title: "Management",
                title_icon: "",
                branches: ["Design", "IT", "Civil", "Mech", "GT"]

            },
            {
                title: "Management",
                title_icon: "",
                branches: ["Design", "IT", "Civil", "Mech", "GT"]

            }
            {
                title: "Management",
                title_icon: "",
                branches: ["Design", "IT", "Civil", "Mech", "GT"]

            },
            {
                title: "Management",
                title_icon: "",
                branches: ["Design", "IT", "Civil", "Mech", "GT"]

            }
        }
    },

    var slider_cards = this.state.details.map(function(card_detail, index){
            return <div><SliderCard details = card_detail/></div>
        });             

    return (
        <div className='container'>
            <Slider {...settings}>
                {slider_cards}

            </Slider>
        </div>
    );
    }
});

const SliderCard = React.createClass({
    render: function(){
        return(
            <Paper><h3>{this.props.details}</h3></Paper>
            );
    }
});

export default SliderArea;