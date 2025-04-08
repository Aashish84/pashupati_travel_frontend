import { useState } from "react";

import styles from "./AdminFeaturedDestinationsModal.module.css"

export default function AdminFeaturedDestionationsModal({setShowModal}){
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        description: "",
        price: "",
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        handleCloseModal();
    };


    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({ name: "", image: "", description: "", price: "" });
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <h2>Add New Destination</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleFormChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleFormChange}
                        required
                    ></textarea>
                    <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleFormChange}
                        required
                    />
                    <div className={styles.modalActions}>
                        <button type="submit" className={`${styles.modalButton} ${styles.modalButtonSubmit}`}>Submit</button>
                        <button type="button" className={`${styles.modalButton} ${styles.modalButtonCancel}`} onClick={handleCloseModal}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}