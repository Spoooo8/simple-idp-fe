import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../public/images/new_logo.png';
import Modal from '../general/Modal';
import Login from '../../routes/Login';
import Register from '../../routes/Register';

function Navigation({ scrollToHero, scrollToSectionA, scrollToFooter }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInitial, setUserInitial] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (token && user) {
      setIsLoggedIn(true);
      setUserInitial(user.name?.[0]?.toUpperCase() || 'U');
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const closeModal = () => {
    navigate('/');
  };

  const showLogin = location.pathname === '/login';
  const showRegister = location.pathname === '/register';

  return (
    <header className="bg-white shadow-md w-full">
      <div className="w-full px-4 py-4 flex justify-between items-center relative">
        <div className="flex space-x-4 text-black">
          <span onClick={scrollToHero} className="cursor-pointer hover:underline">Home Page</span>
          <span onClick={scrollToSectionA} className="cursor-pointer hover:underline">Services</span>
          <span onClick={scrollToFooter} className="cursor-pointer hover:underline">Contact Us</span>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {isLoggedIn ? (
          <div className="h-10 w-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-base font-bold">
            {userInitial}
          </div>
        ) : (
          <div className="flex space-x-4">
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
              onClick={() => navigate('/login')}
            >
              LogIn
            </button>
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>
        )}

        {showLogin && (
          <Modal navigateTo="/">
            <Login onClose={closeModal} />
          </Modal>
        )}
        {showRegister && (
          <Modal navigateTo="/">
            <Register onClose={closeModal} />
          </Modal>
        )}
      </div>
    </header>
  );
}

export default Navigation;
