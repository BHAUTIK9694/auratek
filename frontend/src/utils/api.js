/**
 * Auratek API Client
 * Base configuration for communicating with Laravel backend
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Generic fetch wrapper with error handling
 */
const apiClient = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API request failed: ${endpoint}`, error);
    throw error;
  }
};

export const api = {
  get: (endpoint) => apiClient(endpoint, { method: 'GET' }),
  post: (endpoint, data) => apiClient(endpoint, { method: 'POST', body: JSON.stringify(data) }),
  put: (endpoint, data) => apiClient(endpoint, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (endpoint) => apiClient(endpoint, { method: 'DELETE' }),
};

export default api;
