import React from 'react'
import './css/footer.css'
import { MdEmail } from "react-icons/md";
import Logo from './Assets/Logo (1).png'

const Footer = () => {
  return (  
    <footer>
      <div className="container">
        <div className="footer">
          <div className="about">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <h4>Email: <span>info@jstemplate.net</span></h4>
            <h4>Phone: <span>880 123 456 789</span></h4>
          </div>
        <div className="links-otr">
            <div className="Qlink">
            <h2>Quick Link</h2>
            <ul>
              <li>
                <a href="#">Home</a>
                </li>
              <li>
                <a href="#">About</a>
                </li>
              <li>
                <a href="#">Blog</a>
                </li>
              <li>
                <a href="#">Archived</a>
                </li>
              <li>
                <a href="#">Author</a>
                </li>
              <li>
                <a href="#">Contact</a>
                </li>
            </ul>
          </div>
          <div className="category">
            <h2>Category</h2>
            <ul>
              <li>
                <a href="#">Lifestyle</a>
                </li>
              <li>
                <a href="#">Technology</a>
                </li>
              <li>
                <a href="#">Travel</a>
                </li>
              <li>
                <a href="#">Business</a>
                </li>
              <li>
                <a href="#">Economy</a>
                </li>
              <li>
                <a href="#">Sports</a>
                </li>
            </ul>
          </div>
        </div>
          <div className="newsletter">
            <div>
              <h2>Weekly Newsletter</h2>
              <p>Get blog articles and offers via email</p>
              <div className="email">
                <input type="email" placeholder='Your Email' />
                <MdEmail className='eicon' />
              </div>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="content">
            <img src={Logo} alt="" />
            <div className="inner_content">
              <h2>Meta <span>Blog</span></h2>
              <p>© <span>JS Template</span> 2023. All Rights Reserved.</p>
            </div>
          </div>
            <ul>
              <li><a href="#">Term of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer