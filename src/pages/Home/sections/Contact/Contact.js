import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../../../config/emailjs';
import './Contact.css';

/**
 * Contact
 *
 * A functional contact form with validation, state management, and user feedback.
 * Includes form validation, loading states, and success/error messages.
 * Ready to integrate with backend services like EmailJS, Formspree, or custom APIs.
 */
const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errors, setErrors] = useState({});
  
  // Security: Rate limiting
  const lastSubmissionTime = useRef(0);
  const submissionCount = useRef(0);
  const RATE_LIMIT_DELAY = 30000; // 30 seconds between submissions
  const MAX_HOURLY_SUBMISSIONS = 5;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Security: Sanitize inputs
    const sanitize = (input) => input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    const cleanName = sanitize(formData.name.trim());
    const cleanEmail = sanitize(formData.email.trim());
    const cleanMessage = sanitize(formData.message.trim());
    
    if (!cleanName) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (cleanName.length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    } else if (cleanName.length > 100) {
      newErrors.name = 'El nombre es demasiado largo (máximo 100 caracteres)';
    }
    
    if (!cleanEmail) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      newErrors.email = 'Por favor, introduce un email válido';
    } else if (cleanEmail.length > 254) {
      newErrors.email = 'El email es demasiado largo';
    }
    
    if (!cleanMessage) {
      newErrors.message = 'El mensaje es obligatorio';
    } else if (cleanMessage.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    } else if (cleanMessage.length > 1000) {
      newErrors.message = 'El mensaje es demasiado largo (máximo 1000 caracteres)';
    }
    
    // Security: Check for suspicious patterns
    const suspiciousPatterns = [
      /viagra|casino|lottery|prize|winner/i,
      /click here|urgent|act now/i,
      /(http|https):\/\/[^\s]+/g // URLs
    ];
    
    const fullText = `${cleanName} ${cleanEmail} ${cleanMessage}`;
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(fullText)) {
        newErrors.general = 'Mensaje detectado como posible spam';
        break;
      }
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Security: Rate limiting check
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionTime.current;
    
    if (timeSinceLastSubmission < RATE_LIMIT_DELAY) {
      const remainingTime = Math.ceil((RATE_LIMIT_DELAY - timeSinceLastSubmission) / 1000);
      setErrors({ general: `Por favor espera ${remainingTime} segundos antes de enviar otro mensaje` });
      return;
    }
    
    // Security: Check hourly limit
    const oneHourAgo = now - (60 * 60 * 1000);
    if (submissionCount.current >= MAX_HOURLY_SUBMISSIONS && lastSubmissionTime.current > oneHourAgo) {
      setErrors({ general: 'Has alcanzado el límite de mensajes por hora. Inténtalo más tarde.' });
      return;
    }
    
    // Validate form
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});
    
    try {
      // Security: Sanitize data before sending
      const sanitizedData = {
        name: formData.name.trim().substring(0, 100),
        email: formData.email.trim().substring(0, 254),
        message: formData.message.trim().substring(0, 1000)
      };
      
      // Send email using EmailJS
      const templateParams = {
        name: sanitizedData.name,
        email: sanitizedData.email,
        message: sanitizedData.message,
        to_email: 'fnatic.de.temu10@gmail.com',
        timestamp: new Date().toLocaleString('es-ES'),
        user_ip: 'Hidden for privacy'
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.status);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Security: Update rate limiting counters
      lastSubmissionTime.current = now;
      submissionCount.current += 1;
      
      // Reset hourly counter after one hour
      setTimeout(() => {
        submissionCount.current = Math.max(0, submissionCount.current - 1);
      }, 60 * 60 * 1000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="contact-section">
      <h2>Contacto</h2>
      <p className="contact-intro">
        ¿Tienes alguna pregunta o quieres unirte a nuestro equipo? ¡Escríbenos!
      </p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
            placeholder="Tu nombre completo"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Correo electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
            placeholder="tu@email.com"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Mensaje *
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
            placeholder="Cuéntanos qué tienes en mente..."
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        {/* General errors (rate limiting, spam detection, etc.) */}
        {errors.general && (
          <div className="general-error">
            <span className="error-message">{errors.general}</span>
          </div>
        )}

        <button
          type="submit"
          className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>

      {/* Status messages */}
      {submitStatus === 'success' && (
        <div className="status-message success">
          <h3>¡Mensaje enviado!</h3>
          <p>Gracias por contactarnos. Te responderemos pronto.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="status-message error">
          <h3>Error al enviar</h3>
          <p>Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.</p>
        </div>
      )}
    </section>
  );
};

export default Contact;