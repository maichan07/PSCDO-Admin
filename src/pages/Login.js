import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Default login check
    if (email === '123@gmail.com' && password === '123') {
      console.log('Login successful!');
      navigate('/dashboard');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
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
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <Link to="/register">Click to Register</Link>
      </p>
    </div>
  );
};

const styles = {
  container: { padding: '2rem', maxWidth: '400px', margin: 'auto', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '10px', fontSize: '1rem' },
  button: { padding: '10px', fontSize: '1rem', background: '#007BFF', color: 'white', border: 'none' },
};

export default Login;
