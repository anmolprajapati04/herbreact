import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Placeholder for actual authentication logic
    if (username === 'user' && password === 'password') {
      navigate('/home'); // Redirect to Home after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Herb Your Enthusiasm</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
