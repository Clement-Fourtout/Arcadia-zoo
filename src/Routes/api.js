const apiUrl= 'http//localhost:3001/api';

export const fetchData = async () => {
  try {
    const response = await fetch (' ${apiUrl}/data ');
    if (!response.ok) {
      throw new Error ('Erreur lors de la requète');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la requête', error);
    throw error;
  }
};