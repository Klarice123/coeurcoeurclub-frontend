import React, { useState } from 'react';
import styles from './ContactForm.module.css';

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
        setStatus('Message sent successfully!');
        // Afficher pop in pour dire message envoyé
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
      <h1>Contacte nous</h1>
      <div className={styles.formGroup_nom}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button className={styles.button} type="submit">Envoyer</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
