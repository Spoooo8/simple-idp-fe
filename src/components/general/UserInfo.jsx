import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import Modal from '../general/Modal';
import Login from '../../routes/Login';
import Register from '../../routes/Register';

function UserInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tokenPresent, setTokenPresent] = useState(false);

  const closeModal = () => navigate('/');
  const showLogin = location.pathname === '/login';
  const showRegister = location.pathname === '/register';

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
    window.location.reload();
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

  // Fetch user info when token is present
  useEffect(() => {
    const token = sessionStorage.getItem('access_token');
    console.log('📦 Token:', token);

    if (token) {
      setTokenPresent(true);
      axiosInstance.get('/users/info')
        .then((response) => {
          console.log('✅ User Info Response:', response.data);
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('❌ Failed to fetch user info:', error);
          setLoading(false);
        });
    } else {
      setTokenPresent(false);
      setLoading(false);
    }
  }, []);

  const userInitial = user?.name?.[0]?.toUpperCase() || 'U';
  const userName = user?.name || 'User';
  const userEmail = user?.email || 'unknown@example.com';

  return (
    <>
      {tokenPresent ? (
        <div className="relative" ref={dropdownRef}>
          <div
            className="h-10 w-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-base font-bold cursor-pointer"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            {loading ? '...' : userInitial}
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

      {/* 🔥 Modal logic to keep login/register working */}
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
    </>
  );
}

export default UserInfo;
