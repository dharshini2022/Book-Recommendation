import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
      };
    
    
      const imageStyles = {
        Height: '100%', 
        width: '100%',
        objectFit: 'cover', 
      };

      return (
        <>
          <div className="Genre">
          <p className="p3">Available Genre</p>
            <ul>
              <li><a href="/fiction">Fiction</a></li>
              <li><a href="/non-fiction">Non-Fiction</a></li>
              <li><a href="/bioauto">Biography and Auto-biography</a></li>
              <li><a href="/crime">Crime and Thrillers</a></li>
              <li><a href="/classics">History & Classics</a></li>
              <li><a href="/poetry">Poetry</a></li>
            </ul>
            <a href="/category"><p className="p3">Click to try them</p></a>
            <p className="p3">Live your best Bookish life</p>
          </div>

          <div className="image-slider-container">
          <Slider {...settings}>
            <div>
              <img src="/home slide 1.png" alt="Slide 1" style={imageStyles} />
            </div>
            <div>
              <img src="/home slide 2.png" alt="Slide 2" style={imageStyles} />
            </div>
            <div>
              <img src="/home slide 3.png" alt="Slide 3" style={imageStyles} />
            </div>
          </Slider>
        </div>
        </>
      );

}

export default ImageSlider;