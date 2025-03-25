"use client"

import { useState } from "react"
import styles from "./TestimonialsSection.module.css"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Our trek to Everest Base Camp with Pashupati Holidays was absolutely incredible. The guides were knowledgeable and attentive, making sure we were safe and comfortable throughout the journey. Highly recommended!",
  },
  {
    id: 2,
    name: "David Chen",
    location: "Australia",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The cultural tour of Kathmandu Valley exceeded all my expectations. Our guide was passionate about sharing the rich history and traditions of Nepal. Every detail was perfectly arranged. Thank you for an unforgettable experience!",
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "United Kingdom",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I've traveled with many agencies before, but Pashupati Holidays stands out for their exceptional service and attention to detail. The wildlife safari in Chitwan was the highlight of our trip to Nepal.",
  },
  {
    id: 4,
    name: "Michael Tanaka",
    location: "Japan",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "The Annapurna Circuit trek was challenging but incredibly rewarding. Our guide was experienced and encouraging, and the views were breathtaking. Pashupati Holidays made this adventure possible for us.",
  },
]

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToTestimonial = (index) => {
    setActiveIndex(index)
  }

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>What Our Clients Say</h2>
          <p>Read testimonials from our satisfied travelers</p>
        </div>

        <div className={styles.testimonialSlider}>
          <div className={styles.testimonialWrapper} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialItem}>
                <div className={styles.testimonialContent}>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < testimonial.rating ? styles.starFilled : styles.starEmpty}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className={styles.testimonialText}>{testimonial.text}</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorImage}>
                      <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    </div>
                    <div className={styles.authorInfo}>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`${styles.sliderButton} ${styles.prevButton}`}
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            &lt;
          </button>
          <button
            className={`${styles.sliderButton} ${styles.nextButton}`}
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            &gt;
          </button>

          <div className={styles.indicators}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === activeIndex ? styles.active : ""}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

