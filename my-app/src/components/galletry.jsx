import React from 'react'
import image from '../assets/img/home.jpg'
import image1 from '../assets/img/pexels-curtis-adams-3935346.jpg'
import image2 from '../assets/img/pexels-jessica-bryant-1370704.jpg'
import image3 from '../assets/img/pexels-justin-l-u-c-k-9952001.jpg'
import image4 from '../assets/img/pexels-magda-ehlers-772177.jpg'
import image5 from '../assets/img/pexels-pixabay-221540.jpg'


function Gallery() {

  return (

<div className="gallery">
<h2 className='main-title'>gallery</h2>
    <div className="container">
       <div className="box">
        <div className="image">
            <img src={image} alt="" />
        </div>
       </div>
       <div className="box">
        <div className="image">
            <img src={image1} alt="" />
        </div>
       </div>
       <div className="box">
        <div className="image">
            <img src={image2} alt="" />
        </div>
       </div>
       <div className="box">
        <div className="image">
            <img src={image3} alt="" />
        </div>
       </div>
       <div className="box">
        <div className="image">
            <img src={image4} alt="" />
        </div>
       </div>
       <div className="box">
        <div className="image">
            <img src={image5} alt="" />
        </div>
       </div>
    </div>
   
</div>
  )
}

export default Gallery