# 🔒 Guía de Seguridad - EmailJS

## ⚠️ **Riesgos de Seguridad Actuales**

### **1. Exposición de Credenciales**
- **Problema:** Las credenciales de EmailJS están en el código frontend
- **Riesgo:** Cualquiera puede verlas en el código fuente
- **Mitigación:** EmailJS está diseñado para esto, pero necesita configuración adicional

### **2. Abuso del Servicio**
- **Problema:** Sin protección contra spam/bots
- **Riesgo:** Consumo de cuota (200 emails/mes gratis)
- **Impacto:** Posible saturación de tu email

### **3. Inyección de Contenido**
- **Problema:** Inputs sin sanitizar
- **Riesgo:** Scripts maliciosos en emails
- **Impacto:** Emails con contenido peligroso

## ✅ **Protecciones Implementadas**

### **En el Cliente (React)**
- ✅ **Rate Limiting:** 30 segundos entre envíos
- ✅ **Límite horario:** Máximo 5 emails por hora
- ✅ **Sanitización:** Eliminación de scripts
- ✅ **Validación:** Límites de longitud
- ✅ **Anti-spam:** Detección de patrones sospechosos
- ✅ **Timestamps:** Marcas de tiempo en emails

### **Configuraciones Recomendadas en EmailJS Dashboard**

#### **1. Restricciones de Dominio**
```
Dashboard > Account > Security > Allowed Domains:
- localhost:3000 (desarrollo)
- tu-dominio.com (producción)
```

#### **2. Rate Limiting en EmailJS**
```
Dashboard > Account > Usage:
- Max 5 emails/minute
- Max 20 emails/hour
- Max 100 emails/day
```

#### **3. Template Seguro**
```
Subject: [CONTACTO] {{name}} - {{timestamp}}

De: {{name}}
Email: {{email}}
Timestamp: {{timestamp}}
IP: {{user_ip}}

Mensaje:
{{message}}

---
Enviado desde Fnatic de Temu
```

## 🛡️ **Mejores Prácticas Adicionales**

### **1. Monitoreo**
- Revisar emails regularmente
- Configurar alertas de cuota
- Verificar logs en EmailJS Dashboard

### **2. Backup Plan**
- Tener un email alternativo
- Configurar auto-respuestas
- Documentar el proceso

### **3. Para Producción**
- Cambiar a dominio real
- Configurar SSL/HTTPS
- Considerar CAPTCHA para mayor seguridad

## 🚨 **Señales de Abuso**

### **Indicadores de Spam:**
- Emails con URLs sospechosas
- Contenido repetitivo
- Palabras clave de spam
- Muchos emails en poco tiempo

### **Acciones a Tomar:**
1. Revisar logs en EmailJS
2. Bloquear IPs si es necesario
3. Ajustar filtros anti-spam
4. Considerar añadir CAPTCHA

## 📊 **Nivel de Seguridad Actual**

### **Básico** ⭐⭐⭐☆☆
- ✅ Validación de formulario
- ✅ Rate limiting básico
- ✅ Sanitización de inputs
- ❌ Sin CAPTCHA
- ❌ Sin verificación de backend

### **Para Mejorar a Avanzado:**
1. **Añadir CAPTCHA/reCAPTCHA**
2. **Implementar honeypot fields**
3. **Backend con validación adicional**
4. **Sistema de whitelist/blacklist**

## 💡 **Recomendación Final**

Para un sitio web personal/pequeño como Fnatic de Temu:
- **El nivel actual es SUFICIENTE** ✅
- **EmailJS es seguro** para uso básico
- **Las protecciones implementadas** cubren el 90% de casos
- **Monitorea el uso** regularmente

### **Solo si tienes problemas de spam:**
Considera añadir reCAPTCHA de Google:
```bash
npm install react-google-recaptcha
```

¿Quieres que implemente reCAPTCHA como medida adicional?
