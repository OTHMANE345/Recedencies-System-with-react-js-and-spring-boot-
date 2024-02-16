import React from 'react'
import image from '../assets/img/home.jpg'
import image1 from '../assets/img/pexels-curtis-adams-3935346.jpg'
import image2 from '../assets/img/pexels-curtis-adams-5502227.jpg'
import image3 from '../assets/img/pexels-jessica-bryant-1370704.jpg'
import image4 from '../assets/img/pexels-magda-ehlers-772177.jpg'
import image5 from '../assets/img/pexels-pixabay-221540.jpg'

import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";






function Footer() {

    return (

        <div className="footer">

            <div className="container">
                <div className="box">
                    <h3>template</h3>
                    <ul className="social">
                        <li><a href="">
                            <span className="icon"><SiGmail />
                            </span></a>

                        </li>
                        <li><a href="">
                            <span className="icon"><FaLinkedin />
                            </span></a>

                        </li>
                        <li><a href="">
                            <span className="icon"><FaGithub />

                            </span>
                            </a>
                        </li>
                    </ul>
                    <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore doloremque minus dignissimos debitis eos sed veritatis atque explicabo repellat nam asperiores reprehenderit natus at, architecto laudantium beatae aut quis reiciendis!</p>
                </div>
                <div className="box">
                    <ul className='links'>     
                    <li><span className='icon'><MdOutlineKeyboardDoubleArrowRight />
                    </span> Important link 1</li>
                    <li><span className='icon'><MdOutlineKeyboardDoubleArrowRight />
                    </span> Important link 2</li>
                    <li><span className='icon'><MdOutlineKeyboardDoubleArrowRight />
                    </span> Important link 3</li>
                    <li><span className='icon'><MdOutlineKeyboardDoubleArrowRight />
                    </span> Important link 4</li>
                    <li><span className='icon'><MdOutlineKeyboardDoubleArrowRight />
                    </span> Important link 5</li>
                    <li><span className='icon'><MdOutlineKeyboardDoubleArrowRight />
                    </span> Important link 6</li>    </ul>
                   
                </div>
                <div className="box">
                    <div className="line">
                    <span className='icon'><FaHouse />
                    </span>
                    <div className="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam et, natus accusantium magnam doloribus facere expedita dicta? Vitae ipsa p</div>
                    </div>
                    
                    <div className="line">
                    <span className='icon'><FaPhoneAlt />
                    </span>
                    <span >+Phone number</span>
                    </div>
                </div>
                <div className="box footer-gallery">
                    <img src={image} alt="" />
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />

                </div>

            </div>


        </div>
    )
}

export default Footer