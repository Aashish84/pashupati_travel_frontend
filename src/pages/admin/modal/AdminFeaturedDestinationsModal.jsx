import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import styles from "./AdminFeaturedDestinationsModal.module.css"

export default function AdminFeaturedDestionationsModal({setShowModal}){
    const [formData, setFormData] = useState({
        destination: "",
        image: null,
        description: "",
        price: 0,
    });
    const token = useSelector((store) => store?.auth?.token);


    async function saveFeaturedDestination() {
        const featuredDestination = {
            destination: formData.destination,
            description: formData.description,
            price: formData.price,
          };

        const finalFormData = new FormData();
        finalFormData.append("featuredDestinationString" , JSON.stringify(featuredDestination));
        finalFormData.append("image" , formData.image);

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_SERVER_URL}/admin/featuredDestination`, finalFormData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleFormChange = (e) => {
        const { name, value, type, files } = e.target;

        setFormData((prevData) => ({
          ...prevData,
          [name]: type === "file" ? files[0] : name === "price" ? Number(value) : value,
        }));
        console.log({formData});
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();;
        saveFeaturedDestination()
        handleCloseModal();
    };


    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({ destination: "", image: null, description: "", price: 0});
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <h2>Add New Destination</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        name="destination"
                        placeholder="destination"
                        value={formData.destination}
                        onChange={handleFormChange}
                        required
                    />
                    <input
                        type="file"
                        name="image"
                        placeholder="image file"
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
                        type="number"
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