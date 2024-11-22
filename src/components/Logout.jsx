import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
     // Clear local storage and cookies
     localStorage.clear();
     sessionStorage.clear();  
     
    // Redirect to login page


    

    navigate('/login');
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;