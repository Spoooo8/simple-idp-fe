import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://user-service-zvct.onrender.com',
});

// Attach token to every request
axiosInstance.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('access_token'); // ✅ Correct key
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Handle 401 errors globally
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            sessionStorage.clear();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
