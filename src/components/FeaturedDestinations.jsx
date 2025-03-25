import styles from "./FeaturedDestinations.module.css"

const destinations = [
  {
    id: 1,
    name: "Kathmandu Valley",
    image: "/placeholder.svg?height=300&width=400",
    description: "Explore the ancient temples and vibrant culture of Kathmandu Valley.",
    price: "From $499",
  },
  {
    id: 2,
    name: "Pokhara",
    image: "/placeholder.svg?height=300&width=400",
    description: "Enjoy the serene lakes and stunning mountain views in Pokhara.",
    price: "From $599",
  },
  {
    id: 3,
    name: "Chitwan National Park",
    image: "/placeholder.svg?height=300&width=400",
    description: "Experience wildlife safari in the lush jungles of Chitwan.",
    price: "From $699",
  },
  {
    id: 4,
    name: "Lumbini",
    image: "/placeholder.svg?height=300&width=400",
    description: "Visit the birthplace of Buddha and explore sacred monasteries.",
    price: "From $549",
  },
  {
    id: 5,
    name: "Everest Base Camp",
    image: "/placeholder.svg?height=300&width=400",
    description: "Trek to the base of the world's highest mountain for breathtaking views.",
    price: "From $1299",
  },
  {
    id: 6,
    name: "Annapurna Circuit",
    image: "/placeholder.svg?height=300&width=400",
    description: "Embark on one of the most diverse treks in the Himalayas.",
    price: "From $1199",
  },
]

const FeaturedDestinations = () => {
  return (
    <section id="destinations" className={styles.destinations}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Featured Destinations</h2>
          <p>Explore our handpicked destinations for your next adventure</p>
        </div>

        <div className={styles.destinationGrid}>
          {destinations.map((destination) => (
            <div key={destination.id} className={styles.destinationCard}>
              <div className={styles.imageContainer}>
                <img src={destination.image || "/placeholder.svg"} alt={destination.name} />
                <div className={styles.price}>{destination.price}</div>
              </div>
              <div className={styles.cardContent}>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <button className={styles.exploreButton}>Explore</button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAll}>
          <button className={styles.viewAllButton}>View All Destinations</button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedDestinations

