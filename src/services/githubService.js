const GITHUB_API_BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE_URL}/${username}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Usuário não encontrado (404)');
      }
      throw new Error('Erro na requisição');
    }
    
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Erro ao buscar usuário do GitHub:', error);
    throw error;
  }
};