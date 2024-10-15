import React, { useState } from 'react';
import './index.css';
import Dashboard from './components/Dashboard';
import Authorization from './components/Authorization';
import { useNavigate, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    const storedUsername = 'admin';
    const storedPassword = '123';

    if (username === storedUsername && password === storedPassword) {
      setIsLoggedIn(true);
      localStorage.setItem('authenticated', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('authenticated');
  };

  React.useEffect(() => {
    const loggedInStatus = localStorage.getItem('authenticated');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  if (isLoggedIn) {
    return (
      <div>
        <Routes>
          <Route
            path='/dashboard'
            element={<Dashboard />}
          />
        </Routes>
      </div>
    );
  }

  return (
    <Authorization
      setLogin={handleLogin}
    />
  );
};

export default App;