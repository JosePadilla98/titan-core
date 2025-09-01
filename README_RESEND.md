# Configuración de Resend para Formulario de Contacto

## Requisitos previos

1. Crear una cuenta en [Resend](https://resend.com)
2. Obtener tu API Key desde el dashboard de Resend
3. Verificar tu dominio o usar el dominio de prueba de Resend

## Configuración de variables de entorno

1. Copia el archivo `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edita el archivo `.env` con tus credenciales de Resend:
   ```env
   RESEND_API_KEY=re_1234567890abcdefghijklmnopqrstuvwxyz
   RESEND_FROM=tu-dominio@tudominio.com
   RESEND_TO=tu-correo@empresa.com
   ```

3. **Obtener tu API Key de Resend:**
   - Inicia sesión en [Resend](https://resend.com)
   - Ve a API Keys en el dashboard
   - Crea una nueva API Key o copia una existente

4. **Configurar el remitente (FROM):**
   - Puedes usar un dominio verificado: `contacto@tudominio.com`
   - O usar el dominio de prueba de Resend: `onboarding@resend.dev`

## Verificación de dominio en Resend (Recomendado)

Para mejores tasas de entrega, verifica tu dominio:

1. En el dashboard de Resend, ve a "Domains"
2. Agrega tu dominio (ej: `tudominio.com`)
3. Agrega los registros DNS que te proporciona Resend
4. Una vez verificado, puedes usar `contacto@tudominio.com` como remitente

## Prueba de funcionamiento

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Ve a la página de contacto: http://localhost:4321/contact

3. Completa el formulario y envíalo

4. Revisa tu bandeja de entrada (y spam) para ver el correo de prueba

## Solución de problemas

### Error: "Cannot find module 'resend'"
Ejecuta: `npm install resend`

### Error: "Invalid API Key"
Verifica que tu API Key de Resend sea correcta en el archivo `.env`

### Los correos no llegan
- Revisa la carpeta de spam
- Verifica que el dominio esté verificado en Resend
- Asegúrate de que la API Key tenga permisos para enviar correos

### Variables de entorno no se cargan
Asegúrate de que el archivo `.env` esté en la raíz del proyecto y que contenga las variables correctas.

## Producción

Para producción, configura las variables de entorno en tu servicio de hosting:

- **Vercel**: Ve a Settings > Environment Variables
- **Netlify**: Site settings > Environment variables
- **Railway**: Variables tab in your project
- **Otros**: Consulta la documentación de tu proveedor de hosting

Asegúrate de que `RESEND_API_KEY`, `RESEND_FROM`, y `RESEND_TO` estén configuradas correctamente.
