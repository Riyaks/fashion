import React from 'react'
import './Carou.css'
import Carousel from 'react-bootstrap/Carousel';
function Bootsrapcaro() {
  return (
    <>
   
    <div >
        <div class="caroo  " >
    
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" 
          alt="First slide" style={{opacity:"0.9"}}
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src="https://www.hdwallpapers.in/download/black_white_nike_shoe_in_black_white_background_hd_nike-1920x1080.jpg"
          alt="Second slide" style={{opacity:"0.9"}}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://www.hdwallpapers.in/download/girl_model_with_brown_and_black_hair_and_hat_hd_girl-HD.jpg" 
          alt="Third slide" style={{opacity:"0.9"}}
        />

      </Carousel.Item>
    </Carousel>
    </div>
    </div>

    </>
  )
}

export default Bootsrapcaro
