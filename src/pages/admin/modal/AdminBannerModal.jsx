import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import styles from "./AdminFeaturedDestinationsModal.module.css"

export default function AdminBannerModal({setShowModal , setFeaturedDestinations , initialData}){
    const [formData, setFormData] = useState({});
    const token = useSelector((store) => store?.auth?.token);

    useEffect(() => {
        console.log("modal initial data ::" , initialData);
        
        if (initialData) {
          setFormData({
            id:initialData.id || 0,
            title: initialData.title || "",
            description: initialData.description || ""
          });
        }

        console.log("initial modal form data ",formData);
        
      }, [initialData])

    async function saveFeaturedDestination() {
        const featuredDestination = {
            id:initialData.id,
            title: formData.title,
            description: formData.description
          };

        const finalFormData = new FormData();
        finalFormData.append("bannerString" , JSON.stringify(featuredDestination));
        finalFormData.append("image" , formData.image);

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_SERVER_URL}/admin/banner`, finalFormData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        authorization: `Bearer ${token}`
                    }
                }
            );
            console.log("after saved " , data);
            // setFeaturedDestinations(prev => [...prev , data])

            setFeaturedDestinations((prev) => {
                const index = prev.findIndex(dest => dest.id === data.id);
                if (index !== -1) {
                    const updated = [...prev];
                    updated[index] = data;
                    return updated;
                } else {
                    return [...prev, data];
                }
            });

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
                <h2>Add New Banner</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        name="title"
                        placeholder="banner title"
                        value={formData.title}
                        onChange={handleFormChange}
                        required
                    />
                    <input
                        type="file"
                        name="image"
                        placeholder="image file"
                        onChange={handleFormChange}
                        // required
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleFormChange}
                        required
                    ></textarea>
                    <div className={styles.modalActions}>
                        <button type="submit" className={`${styles.modalButton} ${styles.modalButtonSubmit}`}>Submit</button>
                        <button type="button" className={`${styles.modalButton} ${styles.modalButtonCancel}`} onClick={handleCloseModal}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>  
    )
}