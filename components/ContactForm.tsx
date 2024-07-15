import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message envoyé!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } else {
        setStatus('Error sending message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <p className={styles.picto}>✦</p>
      <h1 className={styles.titre}>CONTACTE NOUS</h1>
      <div className={styles.formGroup_nom}>
        <div className={`${styles.formGroup} ${styles.prenom}`}>
          <label htmlFor="firstName">PRÉNOM *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Ton prénom"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">NOM</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Ton nom"
          />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">EMAIL *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="exemple@email.fr"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">MESSAGE *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Ecris ton message ici..."
          required
        />
      </div>
      <button className={styles.button} type="submit">ENVOYER</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
