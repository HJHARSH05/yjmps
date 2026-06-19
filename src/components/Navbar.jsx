import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src="/20230422_113048.jpg" alt="School Logo" className="logo-image" />
          <div className="logo-text">
            <h1>YJMPS</h1>
            <p className="tagline">Devidhura</p>
          </div>
        </Link>
        <ul className="nav-menu">
          <li><Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link></li>
          <li><Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link></li>
          <li><Link to="/gallery" className={`nav-link ${isActive('/gallery')}`}>Gallery</Link></li>
          <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  )
}
