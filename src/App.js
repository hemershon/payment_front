import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import PaymentForm from './components/PaymentForm';
import axios from 'axios';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  return (
    <div className="App">
      {token ? (
        <div>
          <Logout setToken={setToken} />
          <PaymentForm />
        </div>
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  );
}

export default App;
