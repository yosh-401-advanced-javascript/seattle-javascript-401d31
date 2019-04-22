import { useState, useEffect } from 'react';

const Login = id => {
  const [isLoggedIn, setIsOnline] = useState(false);

  function toggleStatus() {
    setIsOnline(!isLoggedIn);
    console.log({ isLoggedIn });
  }

  return { isLoggedIn, toggleStatus };
};

export default Login;
