import { Link } from "react-router-dom";
import styles from "./AdminNavbar.module.css";


function AdminNavbar(){
    return (
        <>
            <div className={styles.sidebar}>
                <h2 className={styles.logo}>Admin Panel</h2>
                <ul className={styles.navList}>
                    <li>
                        <Link to="/admin/dashboard" className={styles.navItem}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/featured" className={styles.navItem}>Featured Destination</Link>
                    </li>
                    <li>
                        <Link to="/admin/settings" className={styles.navItem}>Settings</Link>
                    </li>
                    <li>
                        <Link to="/logout" className={styles.navItem}>Logout</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AdminNavbar;