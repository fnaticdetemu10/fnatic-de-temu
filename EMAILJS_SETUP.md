# 📧 Configuración de EmailJS para Formulario de Contacto

## 🚀 Guía paso a paso

### 1. Crear cuenta en EmailJS
1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar servicio de email
1. En el dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Elige tu proveedor:
   - **Gmail** (recomendado)
   - **Outlook/Hotmail**
   - **Yahoo**
   - Otros
4. Sigue los pasos de autenticación
5. **Guarda el Service ID** (algo como `service_abc123`)

### 3. Crear template de email
1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura el template:

#### Subject:
```
Nuevo mensaje de contacto - {{name}}
```

#### Content:
```
Hola,

Has recibido un nuevo mensaje de contacto desde tu web:

De: {{name}}
Email: {{email}}

Mensaje:
{{message}}

---
Enviado desde el formulario de contacto de Fnatic de Temu
Fecha: {{reply_to}}
```

4. **Guarda el Template ID** (algo como `template_xyz789`)

### 4. Obtener Public Key
1. Ve a **"Account"** > **"API Keys"**
2. Copia tu **Public Key** (algo como `user_abcdef123456`)

### 5. Configurar en el proyecto
Edita el archivo `src/config/emailjs.js`:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',     // Tu Service ID
  TEMPLATE_ID: 'template_xyz789',   // Tu Template ID  
  PUBLIC_KEY: 'user_abcdef123456',  // Tu Public Key
};
```

### 6. Cambiar email de destino
En el archivo `Contact.js`, línea ~87, cambia:
```javascript
to_email: 'tu-email@gmail.com' // Pon tu email aquí
```

## ✅ ¡Listo!
Una vez configurado, el formulario enviará emails reales a tu dirección.

## 📋 Variables del template
El template puede usar estas variables:
- `{{name}}` - Nombre del remitente
- `{{email}}` - Email del remitente  
- `{{message}}` - Mensaje
- `{{to_email}}` - Tu email (opcional)

## 🔧 Límites gratuitos
- 200 emails/mes
- Perfecto para un sitio web personal/pequeño

## 🆘 ¿Problemas?
1. Verifica que los IDs son correctos
2. Revisa la consola del navegador para errores
3. Asegúrate de que el servicio de email está activo
