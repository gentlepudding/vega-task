import React, { useState } from 'react';

interface AuthorizationProps {
  setLogin: (username: string, password: string) => void;
};

const Authorization = (props: AuthorizationProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    props.setLogin(username, password)
  };

  return (
    <div className="background">
        <h3 className="header">Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" value={username}
          onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Authorization;
