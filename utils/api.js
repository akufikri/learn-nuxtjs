// utils/api.js
export function handleApiError(error) {
      if (error.response && error.response.status === 401) {
            console.error('API request failed: Unauthorized (401)')
            // Handle the error as needed (e.g., redirect to login page)
      } else {
            console.error('API request failed:', error.message)
      }
}
