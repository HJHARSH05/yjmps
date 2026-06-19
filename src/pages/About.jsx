export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{backgroundImage: "url('/2.PNG')"}}>
        <div className="page-header-overlay">
          <h1>About Our School</h1>
          <p>Nurturing Excellence Since the Beginning</p>
        </div>
      </section>

      {/* School History Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>Our History</h2>
            <p>Yogesh Joshi Memorial Shiv Shakti Public School, Devidhura, has been a beacon of educational excellence since its establishment in 2001. Founded with a vision to provide quality education rooted in Indian values and culture, our school has grown to become one of the premier educational institutions in the region.</p>
            <p>The school was established in 2001 by Mr. Yogesh Joshi, whose vision was to provide modern education to the children of the area at their own homes, ensuring people weren't forced to migrate for quality education. Though he unfortunately became the victim of an accident on 31 October 2001, his legacy continues. Since then, the school has been moving from zero to the top, cherishing his memories and carrying forward his incomplete work.</p>
            <p>On behalf of all the parents and local people, we pay heartfelt tribute to late Yogesh Joshi and pray for the strength to continue his vision. Today, hundreds of children are studying in our school—not just local children, but also students from Almora and Nainital districts. Many have achieved success in competitive examinations and brought glory to the school and the region.</p>
            
            {/* School Photos */}
            <div className="school-photos-section">
              <h3 style={{textAlign: 'center', marginTop: '50px', marginBottom: '30px'}}>Our School Campus</h3>
              <div className="school-photos-grid">
                <div className="school-photo">
                  <img src="/5.PNG" alt="School Building" />
                  <p>Main Building</p>
                </div>
                <div className="school-photo">
                  <img src="/6.PNG" alt="School Campus" />
                  <p>School Campus</p>
                </div>
                <div className="school-photo">
                  <img src="/GBP_5450.JPG" alt="School Infrastructure" />
                  <p>School Infrastructure</p>
                </div>
                <div className="school-photo">
                  <img src="/GBP_5451.JPG" alt="Campus View" />
                  <p>Campus View</p>
                </div>
              </div>
            </div>
            
            <div className="headmaster-message">
              <h3>Headmaster's Message</h3>
              <p><strong>"We aim at inspiring our students to dream more, learn more, do more, and become more in their respective journeys of life."</strong></p>
              <p className="headmaster-name">— Brij Mohan Joshi, Headmaster</p>
              <p>Our school aims at offering all our students a broad and balanced curriculum that provides rewarding and stimulating activities to prepare them for the best social and cultural life.</p>
            </div>

            <h3>School Achievements</h3>
            <p>It is the result of healthy discipline, good thinking and hard work of skilled teachers that today the school has its own identity. From 2004 to present, many students from our school have been achieving success in:</p>
            <ul className="achievements-list">
              <li>Rajiv Gandhi Navodaya Vidyalaya</li>
              <li>Jawahar Navodaya Vidyalaya</li>
              <li>Sainik School Ghorakhal</li>
              <li>Other prestigious schools and competitive examinations</li>
            </ul>
            <p>Over 100 children have been selected to these prestigious institutions till 2018. Schools have been showcasing their talent on all occasions including sports competitions, cultural activities, debate competitions, and more. Our students who have taken primary education from this school are today rendering their service in medical, engineering and higher positions.</p>
          </div>
        </div>
      </section>

      {/* Location & Background */}
      <section className="location-section">
        <div className="container">
          <h2>Our Location</h2>
          <p>Maa Varahi Dham Devidhura, situated in the border of Almora, Nainital and Champawat districts, has been aware of education since its past. Our school has filled an important gap in primary education in this region. Despite limited resources and difficult conditions, the school continues to progress day by day.</p>
          
          <h3>School Milestones</h3>
          <div className="milestones-grid">
            <div className="milestone">
              <span className="year">2001</span>
              <p>School Establishment</p>
            </div>
            <div className="milestone">
              <span className="year">2003</span>
              <p>Temporary Recognition of Class 5</p>
            </div>
            <div className="milestone">
              <span className="year">2005</span>
              <p>School Land Purchased</p>
            </div>
            <div className="milestone">
              <span className="year">2006</span>
              <p>Permanent Recognition of Class 5</p>
            </div>
            <div className="milestone">
              <span className="year">2009</span>
              <p>Recognition of Class 8</p>
            </div>
            <div className="milestone">
              <span className="year">2022</span>
              <p>Recognition of Class 10 from Uttrakhand Board</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{background: '#f9fafb', padding: '60px 20px'}}>
        <div className="container" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '1000px', margin: '0 auto'}}>
          <div style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
            <h3 style={{color: '#1e3a8a', marginBottom: '15px'}}>🎯 Our Mission</h3>
            <p style={{color: '#555', lineHeight: '1.8'}}>To provide a dynamic, inclusive, and supportive educational environment that empowers students to become confident, responsible, and compassionate global citizens. We are committed to fostering academic excellence while nurturing values of integrity, respect, and social responsibility.</p>
          </div>
          <div style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
            <h3 style={{color: '#1e3a8a', marginBottom: '15px'}}>🌟 Our Vision</h3>
            <p style={{color: '#555', lineHeight: '1.8'}}>To be a leading educational institution recognized for academic excellence, character development, and holistic growth. We envision a school community where every student reaches their full potential and contributes positively to society.</p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="facilities">
        <div className="container">
          <h2>Our Facilities</h2>
          <ul style={{listStyle: 'none', maxWidth: '600px', margin: '0 auto'}}>
            <li style={{padding: '12px 0', borderBottom: '1px solid #e5e7eb', color: '#555', fontSize: '1.05rem'}}>✓ Spacious, well-designed classrooms with modern teaching aids</li>
            <li style={{padding: '12px 0', borderBottom: '1px solid #e5e7eb', color: '#555', fontSize: '1.05rem'}}>✓ Well-equipped science and computer laboratories</li>
            <li style={{padding: '12px 0', borderBottom: '1px solid #e5e7eb', color: '#555', fontSize: '1.05rem'}}>✓ Comprehensive library with thousands of books and digital resources</li>
            <li style={{padding: '12px 0', borderBottom: '1px solid #e5e7eb', color: '#555', fontSize: '1.05rem'}}>✓ Sports facilities including playgrounds, basketball court, and badminton courts</li>
            <li style={{padding: '12px 0', borderBottom: '1px solid #e5e7eb', color: '#555', fontSize: '1.05rem'}}>✓ Auditorium for cultural programs and assemblies</li>
            <li style={{padding: '12px 0', borderBottom: '1px solid #e5e7eb', color: '#555', fontSize: '1.05rem'}}>✓ Cafeteria serving nutritious meals</li>
            <li style={{padding: '12px 0', borderBottom: '1px solid #e5e7eb', color: '#555', fontSize: '1.05rem'}}>✓ Medical room with qualified staff</li>
            <li style={{padding: '12px 0', borderBottom: '1px solid #e5e7eb', color: '#555', fontSize: '1.05rem'}}>✓ Transport facility for students</li>
            <li style={{padding: '12px 0', color: '#555', fontSize: '1.05rem'}}>✓ Free Wi-Fi and digital learning resources throughout campus</li>
          </ul>
        </div>
      </section>
    </>
  )
}
