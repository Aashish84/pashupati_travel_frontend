import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logout } from "../state/auth/authSlice";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  function renderAuthLinks() {
    if (token) {
      return <Link to="/admin"> goto admin </Link>
    }
    return null;
    // return <Link to="/login">Login</Link>;
  }

  function renderGoToAdmin(){
    if (token) {
      return <button onClick={handleLogout}>Logout</button>;
    }
    return null;
  }


  function handleLogout() {
    dispatch(logout());
    navigate("/home");
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/home">
            <h1>Pashupati Holidays</h1>
          </Link>
        </div>

        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            {location.pathname == "/home" && (
              <>
                <li className={styles.navItem}>
                  <a href="#home" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#about" onClick={() => setIsMenuOpen(false)}>
                    About
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#destinations" onClick={() => setIsMenuOpen(false)}>
                    Destinations
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#services" onClick={() => setIsMenuOpen(false)}>
                    Services
                  </a>
                </li>
                {/* <li className={styles.navItem}>
                  <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>
                    Testimonials
                  </a>
                </li> */}
                <li className={styles.navItem}>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </a>
                </li>
              </>
            )}
            <li className={styles.navItem}>{renderAuthLinks()}</li>
            <li className={styles.navItem}>{renderGoToAdmin()}</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

