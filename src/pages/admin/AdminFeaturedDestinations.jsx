import { useEffect, useState } from "react";

import styles from "./AdminFeaturedDestinations.module.css";
import AdminFeaturedDestionationsModal from "./modal/AdminFeaturedDestinationsModal.jsx";
import axios from "axios";
import { useSelector } from "react-redux";

const initialFeaturedDestinations = {
  id: 0,
  name: "",
  image: null,
  description: "",
  price: "",
};

export default function AdminFeaturedDestinations() {
  const [showModal, setShowModal] = useState(false);
  const [featuredDestinations, setFeaturedDestinations] = useState([]);
  const [editingData, setEditingData] = useState(null);

  const token = useSelector((store) => store?.auth?.token);

  async function getAllFeaturedDestination() {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}/admin/featuredDestination`,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      setFeaturedDestinations(data)
      console.log("initial get ::",  data );
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllFeaturedDestination();
  }, []);

  const handleAddNew = () => {
    setEditingData(initialFeaturedDestinations);
    setShowModal(true);
  };


  const handleUpdate = (id) => {
    const destinationToEdit = featuredDestinations.find(dest => dest.id === id);
    if (!destinationToEdit) {
      alert("Destination not found!");
      return;
    }

    setEditingData(destinationToEdit);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete destination with ID: ${id}?`);
  
    if (!confirmDelete) return;
  
    try {
      const {data} = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/admin/featuredDestination/${id}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      setFeaturedDestinations((prev) => prev.filter(dest => dest.id !== id));
      alert("Destination deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to delete destination.");
    }
  };  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Featured Destinations</h1>
        <button className={styles.addButton} onClick={handleAddNew}>
          + Add New
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <AdminFeaturedDestionationsModal setShowModal={setShowModal} setFeaturedDestinations={setFeaturedDestinations} initialData={editingData}/>
      )}

      {/* Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Destination</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {featuredDestinations.map((dest) => (
            <tr key={dest.id}>
              <td>{dest.id}</td>
              <td>
                <a href={`${import.meta.env.VITE_SERVER_URL}/file/${dest.image}`} target="_blank">
                  click here
                </a>
              </td>
              <td>{dest.destination}</td>
              <td>{dest.description}</td>
              <td>{dest.price}</td>
              <td>
                <button
                  className={styles.actionButton}
                  onClick={() => handleUpdate(dest.id)}
                >
                  Update
                </button>
                <button
                  className={`${styles.actionButton} ${styles.deleteButton}`}
                  onClick={() => handleDelete(dest.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
