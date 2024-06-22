import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust the baseURL to match your backend API
});

// Add a new target
export const addTarget = (target) => {
    return api.post('/targets', target);
};

// Edit an existing target
export const editTarget = (target) => {
    return api.put(`/targets/${target.id}`, target);
};

// Delete a target
export const deleteTarget = (id) => {
    return api.delete(`/targets/${id}`);
};

// Fetch all targets
export const fetchTargets = () => {
    return api.get('/targets');
};
