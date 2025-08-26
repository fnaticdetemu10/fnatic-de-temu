// Security Configuration for EmailJS
// Add these settings to your EmailJS dashboard for better security

export const SECURITY_RECOMMENDATIONS = {
  // 1. EmailJS Dashboard Settings to Configure:
  
  // AUTO-REPLY: Configure in EmailJS template
  AUTO_REPLY: {
    enabled: true,
    template: `
Hola {{name}},

Gracias por contactar con Fnatic de Temu. 
Hemos recibido tu mensaje y te responderemos pronto.

Saludos,
Equipo Fnatic de Temu
    `
  },

  // 2. DOMAIN RESTRICTIONS: Set in EmailJS dashboard
  ALLOWED_DOMAINS: [
    'localhost:3000',         // Development
    'your-domain.com',        // Production domain
    'www.your-domain.com'     // Production with www
  ],

  // 3. RATE LIMITING: Built into EmailJS
  RATE_LIMITS: {
    perMinute: 5,    // Max 5 emails per minute
    perHour: 20,     // Max 20 emails per hour
    perDay: 100      // Max 100 emails per day
  },

  // 4. TEMPLATE VALIDATION: Only allow specific variables
  ALLOWED_TEMPLATE_VARS: ['name', 'email', 'message', 'to_email']
};
