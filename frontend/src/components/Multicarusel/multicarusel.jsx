import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider2.scss'
function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
  <div className="container">
      <div className="slider-container row ">
      <Slider {...settings}>
        <div className="d-flex silider2__card col-md-4 col-12" >
          <p>
            <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg.webp" className="w-25 rounded-circle  mb-5 m-auto"  alt="" />
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?”
          </p>
          <p>— Collin Miller</p>
        </div>
        <div className="d-flex silider2__card col-md-4 col-12">
          <p>
            <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg.webp" className="w-25 rounded-circle  mb-5 m-auto" alt="" />
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?”
          </p>
          <p>— Collin Miller</p>
        </div>
        <div className="d-flex silider2__card col-md-4 col-12">
        
            <img src="https://preview.colorlib.com/theme/wines/images/person_1.jpg.webp" className="w-25 rounded-circle  mb-5 m-auto" alt="" />
           <p> “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?”
          </p>
          <p>— Collin Miller</p>
        </div>
       
      </Slider>
    </div>
  </div>
  );
}

export default MultipleItems;
