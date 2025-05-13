import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p> Our food ordering web app makes it easier than ever to browse, order, and enjoy your favorite meals , Designed with a seamless user experience, real-time order tracking, and secure payments, we bring convenience straight to your fingertips. Whether you’re dining at the canteen or chilling in the classroom, we’ve got you covered with a wide variety of cuisines and eateries to choose from.</p>
        </div>
        <div className="footer-content-center">
            <h2>KNOW THE TEAM</h2>
            <ul>
                <li>TARINI PRASAD RAY (GROUP LEADER/DEVELOPER)</li>
                <li>SUCHISMITA RAY (FRONTEND DEVELOPER)</li>
                <li>RAHUL TANTI (BACKEND DEVELOPER)</li>
                <li>LIZA NAIK (MEMBER)</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>campusbites08@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © CampusBites - All Right Reserved.</p>
    </div>
  )
}

export default Footer
