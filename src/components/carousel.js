import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return(
        <Slider {...settings}>
            <div className='h-96 w-full flex'>
                <div className='h-full w-full bg-red-700'>

                </div>
                <div>

                </div>
            </div>
            <div className='h-96 w-full flex'>
                <div className='h-full w-full bg-yellow-400'>

                </div>
                <div>

                </div>
            </div>
            <div className='h-96 w-full flex'>
                <div className='h-full w-full bg-blue-600'>

                </div>
                <div>

                </div>
            </div>
        </Slider>
    );
}

export default Carousel;