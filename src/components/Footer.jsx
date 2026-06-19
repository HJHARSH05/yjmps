import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: info@yjmps.com</p>
            <p>Phone: <a href="tel:+919410118731">+91-9410118731</a></p>
            <p>Devidhura, Uttarakhand</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social">Facebook</a>
              <a href="#" className="social">Twitter</a>
              <a href="#" className="social">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Yogesh Joshi Memorial Shiv Shakti Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
