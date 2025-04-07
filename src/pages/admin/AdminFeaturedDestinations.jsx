import { useState } from "react";

import styles from "./AdminFeaturedDestinations.module.css";
import AdminFeaturedDestionationsModal from "./modal/AdminFeaturedDestinationsModal.jsx";

const featuredDestinations = [
  {
    id: 6,
    name: "Annapurna Circuit",
    image: "/placeholder.svg?height=300&width=400",
    description: "Embark on one of the most diverse treks in the Himalayas.",
    price: "From $1199",
  },
];

export default function AdminFeaturedDestinations() {
  const [showModal, setShowModal] = useState(false);

  const handleAddNew = () => {
    setShowModal(true);
  };


  const handleUpdate = (id) => {
    alert(`Update destination with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete destination with ID: ${id}`);
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
        <AdminFeaturedDestionationsModal showModal={showModal} setShowModal={setShowModal}/>
      )}

      {/* Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
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
                <img
                  src={dest.image}
                  alt={dest.name}
                  className={styles.image}
                />
              </td>
              <td>{dest.name}</td>
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
