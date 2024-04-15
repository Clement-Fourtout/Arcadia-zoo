export function getTasks() {
  return fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/tasks')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des tâches');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des tâches :', error.message);
      throw error;
    });
}