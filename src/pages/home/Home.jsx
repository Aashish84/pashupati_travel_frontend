import Navbar from '../../components/Navbar'
import ImageSlider from '../../components/ImageSlider'
import AboutSection from '../../components/AboutSection'
import FeaturedDestinations from '../../components/FeaturedDestinations'
import ServicesSection from '../../components/ServicesSection'
import TestimonialsSection from '../../components/TestimonialsSection'
import ContactSection from '../../components/ContactSection'
import Footer from '../../components/Footer'
import styles from "./Home.module.css"

function Home(){
    return (
        <div>
        {/* <Navbar /> */}
        <main className={styles.main}>
            <ImageSlider />
            <AboutSection />
            <FeaturedDestinations />
            <ServicesSection />
            <TestimonialsSection />
            <ContactSection />
        </main>
        <Footer />
    </div>
    )
}

export default Home