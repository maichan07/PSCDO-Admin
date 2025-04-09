import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registering:', email, password);
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleRegister} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Register</button>
      </form>
      <p>
        Already have an account?{' '}
        <Link to="/login">Click to Login</Link>
      </p>
    </div>
  );
};

const styles = {
  container: { padding: '2rem', maxWidth: '400px', margin: 'auto', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '10px', fontSize: '1rem' },
  button: { padding: '10px', fontSize: '1rem', background: '#28a745', color: 'white', border: 'none' },
};

export default Register;
