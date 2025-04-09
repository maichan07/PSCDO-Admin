import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'; // Dashboard icon
import { MdManageAccounts } from 'react-icons/md'; // Customer Report icon
import { BiSolidData } from 'react-icons/bi'; // Delivery Data icon
import { FiLogOut } from 'react-icons/fi'; // Logout icon

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>Admin Panel</h2>
      <nav style={styles.nav}>
        <NavLink to="/dashboard" style={styles.link}>
          <AiFillHome style={styles.icon} />
          Dashboard
        </NavLink>
        <NavLink to="/customer-report" style={styles.link}>
          <MdManageAccounts style={styles.icon} />
          Customer Report
        </NavLink>
        <NavLink to="/delivery-data" style={styles.link}>
          <BiSolidData style={styles.icon} />
          Delivery Data
        </NavLink>
        <NavLink to="/login" style={styles.link}>
          <FiLogOut style={styles.icon} />
          Log Out
        </NavLink>
      </nav>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '220px',
    height: '100vh',
    backgroundColor: 'rgba(255, 149, 0, 1)',
    color: '#fff',
    padding: '20px',
    position: 'fixed',
  },
  logo: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  },
  icon: {
    fontSize: '1.2rem',
  },
};

export default Sidebar;
