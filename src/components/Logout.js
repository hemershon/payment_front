import React from 'react';

function Logout({ setToken }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
