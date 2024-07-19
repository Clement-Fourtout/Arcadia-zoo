import React, { useState } from 'react';
import '../styles/CSS/Admin.css/WrapperRegister.css';

export default function Contact() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, email })
      });

      if (response.ok) {
        setSuccessMessage('Votre message a été envoyé avec succès.');
        setTitle('');
        setDescription('');
        setEmail('');
      } else {
        const { error } = await response.json();
        console.error('Erreur lors de l\'envoi du message :', error);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
    }
  };

  return (
<div className='wrapper'>
<div className="admin-container">

      <h2 className="text-xl-center text-decoration-underline font-weight-bold mb-3 mt-3">Contactez-nous</h2>
      <form onSubmit={handleSubmit}  className="vertical-form" style={styles.form}>
      <div className="form-group"> 
      <label htmlFor="title" className="small-label">Titre</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="small-label">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={styles.input}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="small-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={styles.button}>Envoyer</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
    </div>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: 'auto',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  smallLabel: {
    fontSize: '0.85rem',
    textAlign: 'center',
    marginBottom: '5px',
  },
};
