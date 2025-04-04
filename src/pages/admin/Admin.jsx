import { Outlet } from "react-router-dom"
import styles from "./Admin.module.css"
import AdminNavbar from "./AdminNavbar"


function Admin(){
    return(
        <>
        <div className={styles.adminContainer}>
            <AdminNavbar />
            <div className={styles.mainAdminContent}>
                <Outlet />
            </div>
         </div>
        </>
    )
}

export default Admin