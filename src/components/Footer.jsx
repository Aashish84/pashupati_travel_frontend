import styles from "./Footer.module.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h3>Pashupati Holidays</h3>
            <p>Your trusted travel partner for unforgettable experiences around the world.</p>
            <div className={styles.social}>
              <a href="#" aria-label="Facebook">
                FB
              </a>
              <a href="#" aria-label="Twitter">
                TW
              </a>
              <a href="#" aria-label="Instagram">
                IG
              </a>
              <a href="#" aria-label="LinkedIn">
                LI
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#destinations">Destinations</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Popular Destinations</h4>
            <ul>
              <li>
                <a href="#">Nepal</a>
              </li>
              <li>
                <a href="#">India</a>
              </li>
              <li>
                <a href="#">Bhutan</a>
              </li>
              <li>
                <a href="#">Tibet</a>
              </li>
              <li>
                <a href="#">Thailand</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Contact Info</h4>
            <address className={styles.address}>
              <p>123 Travel Street, Kathmandu, Nepal</p>
              <p>Phone: +977 1234567890</p>
              <p>Email: info@pashupatihols.com</p>
            </address>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {currentYear} Pashupati Holidays. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

