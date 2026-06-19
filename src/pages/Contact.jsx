import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    console.log('Form Data:', formData)
    setStatus({ type: 'success', message: 'Thank you for your message! We will get back to you soon.' })
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    
    setTimeout(() => {
      setStatus(null)
    }, 5000)
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{backgroundImage: "url('/4.PNG')"}}>
        <div className="page-header-overlay">
          <h1>Contact Us</h1>
          <p>Get in Touch with Us</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              
              <div className="info-card">
                <h3>📍 Location</h3>
                <p>Yogesh Joshi Memorial Shiv Shakti Public School</p>
                <p>Devidhura</p>
                <p>Uttarakhand, India</p>
              </div>

              <div className="info-card">
                <h3>📞 Phone</h3>
                <p>Main Office: <a href="tel:+919410118731">+91-9410118731</a></p>
                <p>Admission: <a href="tel:+919410118731">+91-9410118731</a></p>
                <p>Office Hours: 9:00 AM - 4:00 PM (Monday - Friday)</p>
              </div>

              <div className="info-card">
                <h3>📧 Email</h3>
                <p>General Inquiries: info@yjmps.com</p>
                <p>Admissions: admissions@yjmps.com</p>
                <p>Events: events@yjmps.com</p>
              </div>

              <div className="info-card">
                <h3>🕐 Office Hours</h3>
                <p><strong>Monday - Friday:</strong> 9:00 AM - 4:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 1:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>

              <div className="info-card">
                <h3>🌐 Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">f</a>
                  <a href="#" className="social-icon">t</a>
                  <a href="#" className="social-icon">in</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="event">Event Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="6" 
                    placeholder="Enter your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
                <p className="form-note">* Fields are required</p>
              </form>
              {status && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.8699999999998!2d80.3999999999999!3d29.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1b5f5f5f5f5f5%3A0x0!2sYogesh%20Joshi%20Memorial%20Shiv%20Shakti%20Public%20School%20Devidhura!5e0!3m2!1sen!2sin!4v1717977600000" 
              width="100%" 
              height="400" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="map-link">
            <p>📍 <a href="http://maps.app.goo.gl/1hftAqYGK4FGd4dQ7" target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-card">
              <h4>When does admission open?</h4>
              <p>School admissions typically open from March to May each year. Contact our admission office for specific dates and procedures.</p>
            </div>
            <div className="faq-card">
              <h4>What is the admission process?</h4>
              <p>The admission process includes form submission, entrance examination (if applicable), and interview with parents. Our admission team will guide you through each step.</p>
            </div>
            <div className="faq-card">
              <h4>Do you offer transportation?</h4>
              <p>Yes, we provide transportation facility for students. Additional charges may apply. Contact the office for transportation details.</p>
            </div>
            <div className="faq-card">
              <h4>What are the school hours?</h4>
              <p>School hours vary by class. Primary: 9:00 AM - 1:00 PM | Secondary: 9:00 AM - 3:30 PM | Senior Secondary: 9:00 AM - 3:30 PM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
