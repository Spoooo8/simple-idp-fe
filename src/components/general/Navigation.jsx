import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import logo from '../../../public/images/new_logo.png';
import Modal from '../general/Modal';
import Login from '../../routes/Login';
import Register from '../../routes/Register';
import UserInfo from './UserInfo';

function Navigation({ scrollToHero, scrollToSectionA, scrollToFooter, isLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const user = JSON.parse(sessionStorage.getItem('user'));
  const userInitial = user?.name?.[0]?.toUpperCase() || 'U';
  const userName = user?.name || 'User';
  const userEmail = user?.email || 'unknown@example.com';

  const closeModal = () => navigate('/');
  const showLogin = location.pathname === '/login';
  const showRegister = location.pathname === '/register';

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
    window.location.reload(); // optional: force refresh to update UI
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

        {/* {isLoggedIn ? (
          <div className="relative" ref={dropdownRef}>
            <div
              className="h-10 w-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-base font-bold cursor-pointer"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              {userInitial}
            </div>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded shadow-lg text-black z-50">
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-semibold">{userName}</p>
                  <p className="text-sm text-gray-600">{userEmail}</p>
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                  Log out
                </div>
              </div>
            )}
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
        )} */}
        <UserInfo isLoggedIn={isLoggedIn}/>
      </div>
    </header>
  );
}

export default Navigation;
