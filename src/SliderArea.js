import React from 'react';
import Slider      from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
//import 'slick-carousel/slick/slick.css';
import './index.css';
 

const SliderArea = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      className: 'slides',
      centerMode: true
    };
    return (
      <div className='container'>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
      </div>
    );
  }
});

export default SliderArea;