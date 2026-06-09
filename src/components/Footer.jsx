import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer">
        <div className="container">
          <div className="footer-row">
            <div className="col">
              <h2>Get In Touch</h2>
              <p> Lorem ipsum dolor sit amet.</p>
               <div className="social">
                <a href="#"> <FaFacebook /></a>
                <a href="#"> <FaInstagram /></a>
                <a href="#"> <FaTwitter /></a>
               </div>
            </div>
              <div className="col">
                <h2>Company Info</h2>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">We are Hiring</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
                </div>
              <div className="col">
                <h2>Features</h2>
                <ul>
                  <li><a href="#">Buisness Marketing</a></li>
                  <li><a href="#">User Analytic</a></li>
                  <li><a href="#">Live Chat</a></li>
                  <li><a href="#">Unlimited Support</a></li>
                </ul>
                </div>
              <div className="col">
                <h2>Resources</h2>
                <ul>
                  <li><a href="#">IOS & Android</a></li>
                  <li><a href="#">Watch a Demo</a></li>
                  <li><a href="#">Customers</a></li>
                  <li><a href="#">API</a></li>
                </ul>
                </div>
          </div>
          <div className="copyright">
            <p>Copyright © 2026 EduBridge. All rights reserved.</p>
          </div>
          </div>
    </footer>
  )
}
