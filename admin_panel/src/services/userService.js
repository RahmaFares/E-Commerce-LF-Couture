import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

const getAdminToken = () => {
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    return adminData?.token;
};

export const fetchUsers = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${getAdminToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};
