import styles from "./ServicesSection.module.css"

const services = [
  {
    id: 1,
    icon: "🏔️",
    title: "Trekking & Hiking",
    description: "Explore the majestic Himalayas with our expert guides. We offer treks for all experience levels.",
  },
  {
    id: 2,
    icon: "🏯",
    title: "Cultural Tours",
    description: "Immerse yourself in the rich cultural heritage of Nepal, India, and Bhutan with our guided tours.",
  },
  {
    id: 3,
    icon: "🧘",
    title: "Spiritual Journeys",
    description: "Embark on a spiritual journey to sacred sites, monasteries, and temples across the region.",
  },
  {
    id: 4,
    icon: "🦁",
    title: "Wildlife Safaris",
    description: "Experience thrilling wildlife encounters in national parks and conservation areas.",
  },
  {
    id: 5,
    icon: "🚵",
    title: "Adventure Sports",
    description: "Get your adrenaline pumping with paragliding, rafting, bungee jumping, and more.",
  },
  {
    id: 6,
    icon: "✈️",
    title: "Custom Packages",
    description: "Let us create a tailor-made itinerary based on your specific interests and preferences.",
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Our Services</h2>
          <p>Discover the wide range of travel services we offer</p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className={styles.serviceLink}>
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

