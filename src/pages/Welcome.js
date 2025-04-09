import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Welcome to the Admin Portal</h1>
      <p>Choose an option to continue:</p>
      <div style={styles.buttonGroup}>
        <button onClick={() => navigate('/login')} style={styles.loginBtn}>Login</button>
        <button onClick={() => navigate('/register')} style={styles.registerBtn}>Register</button>
      </div>
    </div>
  );
};

const styles = {

    container: {
    textAlign: 'center',
    padding: '4rem',
    maxWidth: '600px',
    margin: 'auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginTop: '5rem',},

  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '2rem',
  },
  loginBtn: {
    padding: '10px 20px',
    fontSize: '16px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  registerBtn: {
    padding: '10px 20px',
    fontSize: '16px',
    background: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Welcome;
