import styles from "./AboutSection.module.css"

const AboutSection = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <img src="/placeholder.svg?height=500&width=600" alt="About Pashupati Holidays" />
          </div>

          <div className={styles.aboutText}>
            <h2>About Pashupati Holidays</h2>
            <p className={styles.subtitle}>Your Trusted Travel Partner Since 2005</p>

            <p>
              Pashupati Holidays is a premier travel agency specializing in creating unforgettable travel experiences
              across Nepal, India, Bhutan, Tibet, and beyond. With over 15 years of experience in the tourism industry,
              we pride ourselves on our deep local knowledge, personalized service, and commitment to sustainable
              travel.
            </p>

            <p>
              Our team of experienced travel experts is dedicated to crafting tailor-made itineraries that cater to your
              specific interests, preferences, and budget. Whether you're seeking adventure, cultural immersion,
              spiritual enlightenment, or simply relaxation, we have the expertise to make your dream vacation a
              reality.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10k+</span>
                <span className={styles.statLabel}>Happy Travelers</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Destinations</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Tour Packages</span>
              </div>
            </div>

            <button className={styles.learnMoreButton}>Learn More About Us</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

