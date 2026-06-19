import { useState } from 'react'

const galleryImages = [
  { id: 1, src: '/1.PNG', category: 'academics', title: 'School Event' },
  { id: 2, src: '/2.PNG', category: 'academics', title: 'School Activity' },
  { id: 3, src: '/3.PNG', category: 'academics', title: 'Classroom' },
  { id: 4, src: '/4.PNG', category: 'academics', title: 'Learning Session' },
  { id: 5, src: '/GBP_5323.JPG', category: 'sports', title: 'Sports Training' },
  { id: 6, src: '/GBP_5325.JPG', category: 'sports', title: 'Athletic Event' },
  { id: 7, src: '/GBP_5338.JPG', category: 'sports', title: 'Sports Field' },
  { id: 8, src: '/GBP_5343.JPG', category: 'sports', title: 'Physical Activity' },
  { id: 9, src: '/20230422_112737.jpg', category: 'events', title: 'Annual Celebration' },
  { id: 10, src: '/20230422_112747.jpg', category: 'events', title: 'School Gathering' },
  { id: 11, src: '/20230422_112754.jpg', category: 'events', title: 'Cultural Event' },
  { id: 12, src: '/20230422_112759.jpg', category: 'events', title: 'School Program' },
  { id: 13, src: '/5.PNG', category: 'facilities', title: 'School Campus' },
  { id: 14, src: '/6.PNG', category: 'facilities', title: 'School Building' },
  { id: 15, src: '/GBP_5450.JPG', category: 'facilities', title: 'School Infrastructure' },
  { id: 16, src: '/GBP_5451.JPG', category: 'facilities', title: 'Campus View' },
  { id: 17, src: '/20230422_112806.jpg', category: 'events', title: 'Student Activity' },
  { id: 18, src: '/20230422_112825.jpg', category: 'academics', title: 'Academic Event' },
  { id: 19, src: '/GBP_5345.JPG', category: 'sports', title: 'Sports Program' },
  { id: 20, src: '/GBP_5486.JPG', category: 'facilities', title: 'School Facilities' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{backgroundImage: "url('/3.PNG')"}}>
        <div className="page-header-overlay">
          <h1>School Gallery</h1>
          <p>Glimpses of Our School Life</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <div className="gallery-intro">
            <h2>Moments from Our School</h2>
            <p>Explore our school facilities, activities, and memorable moments captured from various events and daily school life. These images showcase the vibrant community, academic excellence, sporting achievements, and infrastructure that make our school a unique learning destination. From classroom activities to sports competitions, cultural events to campus facilities, these photographs capture the essence of Yogesh Joshi Memorial Shiv Shakti Public School.</p>
          </div>

          {/* Gallery Filter */}
          <div className="gallery-filter">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${filter === 'academics' ? 'active' : ''}`}
              onClick={() => setFilter('academics')}
            >
              Academics
            </button>
            <button 
              className={`filter-btn ${filter === 'sports' ? 'active' : ''}`}
              onClick={() => setFilter('sports')}
            >
              Sports
            </button>
            <button 
              className={`filter-btn ${filter === 'events' ? 'active' : ''}`}
              onClick={() => setFilter('events')}
            >
              Events
            </button>
            <button 
              className={`filter-btn ${filter === 'facilities' ? 'active' : ''}`}
              onClick={() => setFilter('facilities')}
            >
              Facilities
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredImages.map(image => (
              <div key={image.id} className="gallery-item">
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <p>{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
