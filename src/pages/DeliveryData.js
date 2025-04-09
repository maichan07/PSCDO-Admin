import React from 'react';
import Sidebar from '../components/Sidebar';
import { Icon } from '@iconify/react';


const DeliveryData = () => {
  return (
    <div style={styles.wrapper}>
    <Sidebar />
    <div style={styles.content}>
      {/* Top Controls in One Line */}
      <h1 style={styles.heading}>Delivery Orders</h1>
      <div style={styles.delivery}>
          <div style={styles.deliveryCard}>
              <p>Total Shipping</p>
          </div>
          <div style={styles.deliveryCard}>
              <p>Pending Package</p>
          </div>
          <div style={styles.deliveryCard}>
              <p>Delivery Shipments</p>
          </div>
      </div>

      <div style={styles.stats}>
          <div>
              <h2>Shipments Statistics</h2>
          </div>
          <div style={styles.statsCard}>
              <p>Shipments</p>
          </div>
          <div style={styles.statsCard}>
              <p>Delivery</p>
          </div>
          <div style={styles.statsCard}>
              <p>Monthly</p>
          </div>
          <div style={styles.statsCard}>
              <p>⋯</p>
          </div>
      </div>

      <div style={styles.topBar}>
        {/* Search Bar */}
        <div>
            <h2>Shipping List</h2>
        </div>
        <div style={styles.searchContainer}>
          <Icon icon="material-symbols:search" style={styles.icon} />
          <input
            type="text"
            placeholder="Search..."
            style={styles.searchInput}
          />
        </div>

      </div>


    </div>
  </div>
);
};

const styles = {
wrapper: {
  display: 'flex',
},
content: {
  padding: '2rem',
  paddingLeft: '240px', // ensures it doesn't overlap sidebar
  width: '90%',
  boxSizing: 'border-box',
  margin: '0 auto',},
topBar: {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '1.5rem',
},
searchContainer: {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '0.5rem 0.75rem',
  backgroundColor: '#fff',
},
icon: {
  color: '#999',
  marginRight: '0.5rem',
},
searchInput: {
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  width: '200px',
},
dropdown: {
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem 1rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#fff',
  cursor: 'pointer',
},
downloadButton: {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
},
heading: {
  fontSize: '24px',
  fontWeight: 'bold',
},
delivery: {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1rem',
},
stats: {
  display: 'flex',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1rem',
  marginTop: '5rem',
},
deliveryCard: {
  padding: '1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
},
};

    

export default DeliveryData;
