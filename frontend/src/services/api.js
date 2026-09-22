const API_URL = import.meta.env.VITE_API_URL

export async function fetchProjects() {
  const response = await fetch(`${API_URL}/projects`)
  if (!response.ok) {
    throw new Error('Failed to load projects')
  }
  return response.json()
}
