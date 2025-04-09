import React from 'react';
import Sidebar from '../components/Sidebar';
import { Icon } from '@iconify/react';

const Dashboard = () => {
  return (
    <div style={styles.wrapper}>
      <Sidebar />
      <div style={styles.content}>
        {/* Top Controls in One Line */}
        <div style={styles.topBar}>
          {/* Search Bar */}
          <div style={styles.searchContainer}>
            <Icon icon="material-symbols:search" style={styles.icon} />
            <input
              type="text"
              placeholder="Search..."
              style={styles.searchInput}
            />
          </div>

          {/* Dropdown */}
          <div style={styles.dropdown}>
            <span style={{ marginRight: '0.5rem' }}>Delivery Logs</span>
            <Icon icon="iconamoon:arrow-down-2" />
          </div>

          {/* Download Button */}
          <button style={styles.downloadButton}>
            <Icon icon="humbleicons:download" style={{ marginRight: '0.5rem' }} />
            Download Delivery Report
          </button>
        </div>

        <hr style={{ margin: '20px 0' }} />

        <h1 style={styles.heading}>Delivery Orders</h1>
        <div style={styles.delivery}>
            <div style={styles.deliveryCard}>
                <p>Todays Delivery</p>
            </div>
            <div style={styles.deliveryCard}>
                <p>Monthly Delivery</p>
            </div>
            <div style={styles.deliveryCard}>
                <p>Delivery Issue</p>
            </div>
            <div style={styles.deliveryCard}>
                <p>Total Delivery</p>
            </div>
        </div>
        <h1 style={styles.heading}>Delivery Reports</h1>       
        <div style={styles.report}>
            <div style={styles.reportCard}>
                <p>All Delivery</p>
            </div>
            <div style={styles.reportCard}>
                <p>Om Progress Delivery</p>
            </div>
            <div style={styles.reportCard}>
                <p>Successful</p>
            </div>
            <div style={styles.reportCard}>
                <p>On Hold Delivery</p>
            </div>
            <div style={styles.reportCard}>
                <p>Cancelled Delivery</p>
            </div>
            <div style={styles.reportCard}>
                <p>Refund</p>
            </div>
        </div>
        <hr style={{ margin: '20px 0' }} />
        <div style={styles.express}>
            <p>Express Delivery</p>
            <div style={styles.courier}>
                <div style={styles.courierText}>
                    <p style={{ marginRight: '20px' }}>Courier Information</p>
                </div>
                <div style={styles.courierText}>
                    <p>Item Information</p>
                </div>
            </div>
            <div>
                <p>Delivery Information </p> 
            <div style={styles.courier}>
                <div style={styles.courierText}>
                    <p style={{ marginRight: '20px' }}>Courier Information</p>
                </div>
                <div style={styles.courierText}>
                    <p>Item Information</p>
                </div>
            </div>
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
  courier: {
    display: 'flex',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    border: '1px solid #ccc',
    
  },
  courierText: {
    backgroundColor: '#f9f9f9',
    textAlign: 'center',

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
report: {
    display: 'flex',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
},
express: {
    boder: '5px solid rgb(0, 0, 0)',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 149, 0, 1)',
},
};

export default Dashboard;
