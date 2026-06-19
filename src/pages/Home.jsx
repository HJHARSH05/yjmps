import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{backgroundImage: "url('/1.PNG')"}}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Yogesh Joshi Memorial Shiv Shakti Public School</h1>
            <p>Excellence in Education, Character & Values</p>
            <p className="location">Devidhura</p>
            <Link to="/about" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <Carousel />

      {/* Tagline Section */}
      <section className="tagline-section">
        <div className="container">
          <h2>A Place to Learn and Grow</h2>
          <p>Immersed in the majestic embrace of the Himalayas, our school stands as a beacon of learning amidst nature's grandeur. Nestled in the serene lap of these towering peaks, we offer an educational journey that transcends boundaries. With an ethos deeply rooted in environmental stewardship and holistic development, our students are nurtured to thrive academically, socially, and spiritually. Surrounded by pristine beauty and guided by a dedicated faculty, our school fosters a love for learning, an appreciation for diversity, and a reverence for the natural world. Join us on this extraordinary expedition of knowledge, where every day is an adventure and every lesson is a glimpse into the wonders of the Himalayas.</p>
          
          <div className="mission-statement">
            <h3>Our Mission Statement</h3>
            <p>We aim at inspiring our students to dream more, learn more, do more, and become more in their respective journeys of life. Through a comprehensive curriculum that blends traditional values with modern education, we prepare our students to become confident, responsible, and compassionate global citizens who contribute positively to society.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Academic Excellence</h3>
              <p>Our comprehensive curriculum is designed to develop critical thinking and problem-solving skills in students. We focus on a balanced approach combining STEM subjects with humanities and arts. Our experienced faculty employs modern teaching methodologies, including activity-based learning, project-based learning, and digital resources to make education engaging and effective. We prepare students not just for board exams, but for life.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Expert Faculty</h3>
              <p>Our dedicated team of highly qualified teachers is committed to the overall development of every student. With years of teaching experience and continuous professional development, our faculty members go beyond textbooks to inspire and mentor students. They create a supportive environment where students feel valued, encouraged to ask questions, and motivated to achieve their full potential.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏯</div>
              <h3>Modern Facilities</h3>
              <p>Our state-of-the-art campus is equipped with well-maintained classrooms, advanced science and computer laboratories, a well-stocked library, sports facilities, and digital learning resources. We believe that a conducive learning environment plays a crucial role in student development. Every facility is designed keeping students' safety and growth in mind.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Value-Based Education</h3>
              <p>Education at our school extends beyond academics. We emphasize the development of strong moral values, ethical principles, and social responsibility. Through various activities, cultural programs, and community engagement initiatives, we nurture students who are not just academically bright but also morally sound individuals ready to contribute to society.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>500+</h3>
              <p>Students</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Faculty Members</p>
            </div>
            <div className="stat-card">
              <h3>25+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>Join Our School Community</h2>
          <p>Be part of a school that values excellence, integrity, and growth</p>
          <Link to="/contact" className="btn btn-light">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
