"use client"

import { useState, useEffect } from "react"
import styles from "./ImageSlider.module.css"
import axios from "axios"

const slidesData = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Discover Amazing Destinations",
    description: "Explore the world with Pashupati Holidays",
    cta: "Book Now",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Unforgettable Experiences",
    description: "Create memories that last a lifetime",
    cta: "View Packages",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Adventure Awaits",
    description: "Embark on thrilling journeys with us",
    cta: "Learn More",
  },
]

const ImageSlider = () => {
  const [slides , setSlides] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)

  const fetchBanner = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/banner`);
      console.log("fetched data " , data);
      
      setSlides(data);
    } catch (error) {
      console.error("Failed to fetch banner data from api : ", error);
    }
  }

  useEffect(()=>{
    fetchBanner();
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <section id="home" className={styles.sliderContainer}>
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
          >
            <img
              src={`${import.meta.env.VITE_SERVER_URL}/api/file/${slide.image}`}
              alt={slide.title}
              className={styles.image}
            />
            <div className={styles.content}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              {/* <button className={styles.cta}>{slide.cta}</button> */}
            </div>
          </div>
        ))}

        <button className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide} aria-label="Previous slide">
          &lt;
        </button>
        <button className={`${styles.arrow} ${styles.next}`} onClick={nextSlide} aria-label="Next slide">
          &gt;
        </button>

        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.active : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageSlider

