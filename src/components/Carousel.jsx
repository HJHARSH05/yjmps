import { useState, useEffect } from 'react'

const carouselImages = [
  { id: 1, src: '/1.PNG', title: 'School Campus' },
  { id: 2, src: '/5.PNG', title: 'School Building' },
  { id: 3, src: '/6.PNG', title: 'School Facilities' },
  { id: 4, src: '/GBP_5450.JPG', title: 'Campus Infrastructure' },
  { id: 5, src: '/GBP_5451.JPG', title: 'School Complex' },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setAutoPlay(false)
    setCurrentSlide((prev) => 
      prev === 0 ? carouselImages.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setAutoPlay(false)
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const goToSlide = (index) => {
    setAutoPlay(false)
    setCurrentSlide(index)
  }

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        {/* Main Carousel */}
        <div className="carousel-main">
          <div className="carousel-slides">
            {carouselImages.map((image, index) => (
              <div
                key={image.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={image.src} alt={image.title} />
                <div className="slide-title">{image.title}</div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="carousel-arrow prev" onClick={goToPrevious} aria-label="Previous slide">
            ‹
          </button>
          <button className="carousel-arrow next" onClick={goToNext} aria-label="Next slide">
            ›
          </button>
        </div>

        {/* Indicators */}
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Auto-play Toggle */}
        <button 
          className="autoplay-toggle"
          onClick={() => setAutoPlay(!autoPlay)}
          title={autoPlay ? 'Pause auto-play' : 'Resume auto-play'}
        >
          {autoPlay ? '⏸' : '▶'}
        </button>
      </div>
    </section>
  )
}
