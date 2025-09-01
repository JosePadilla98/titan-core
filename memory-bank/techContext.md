# Tech Context - Instalaciones Eléctricas y Solares

## Tecnologías Utilizadas

### Framework Principal
- **Astro JS 4.0+**: Framework estático moderno con islands architecture
- **TypeScript**: Tipado estático para mejor mantenibilidad
- **CSS Modules**: Estilos scoped y organizados

### Dependencias Principales
```json
{
  "dependencies": {
    "astro": "^4.0.0",
    "typescript": "^5.0.0"
  },
  "devDependencies": {
    "@astrojs/check": "^0.2.0",
    "prettier": "^3.0.0"
  }
}
```

### Herramientas de Desarrollo
- **Node.js 18+**: Runtime de JavaScript
- **npm**: Gestor de paquetes
- **Prettier**: Formateo de código automático
- **TypeScript Compiler**: Verificación de tipos

## Configuración de Desarrollo

### Estructura de Configuración
- `astro.config.mjs`: Configuración principal de Astro
- `tsconfig.json`: Configuración de TypeScript
- `prettier.config.js`: Reglas de formateo
- `.editorconfig`: Configuración del editor

### Variables de Entorno
El proyecto utiliza configuración estática en archivos TypeScript en lugar de variables de entorno, ya que es principalmente contenido estático.

## Setup de Desarrollo

### Requisitos del Sistema
- Node.js 18 o superior
- npm 9 o superior
- Editor de código con soporte TypeScript

### Comandos Disponibles
```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build local
npm run preview

# Verificar tipos TypeScript
npm run check
```

## Constraints Técnicos

### Rendimiento
- **Límite de bundle size**: < 100KB CSS, < 50KB JavaScript
- **Tiempo de carga**: < 2s en conexión 3G
- **Largest Contentful Paint**: < 1.5s

### Compatibilidad
- **Navegadores**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Dispositivos**: Desktop, Tablet, Mobile (responsive)
- **Accesibilidad**: WCAG 2.1 Level AA como objetivo

### SEO
- **Meta tags**: Completo y configurable
- **Open Graph**: Implementado para redes sociales
- **Schema.org**: Estructurado para rich snippets
- **Sitemap**: Generado automáticamente

## Patrones de Desarrollo

### Estructura de Código
- **Componentes**: Archivos .astro con separación clara de HTML/CSS/JS
- **Tipado**: Interfaces TypeScript para props y datos
- **Estilos**: CSS modules con variables CSS para theming

### Convenciones de Código
- **Nombrado**: PascalCase para componentes, camelCase para utilidades
- **Imports**: Path aliases configurados (@components, @data, etc.)
- **Comentarios**: Documentación mínima pero esencial

### Workflow de Desarrollo
1. Modificar archivos de configuración en `src/data/`
2. Actualizar componentes según necesidades
3. Verificar con `npm run check`
4. Probar responsive design
5. Desplegar a producción

## Integraciones y APIs

### Integraciones Actuales
- **WhatsApp API**: Enlace directo para chat
- **Email**: Formulario de contacto con mailto: links
- **Teléfono**: Enlaces click-to-call

### Integraciones Potenciales
- **Google Maps API**: Para ubicación de negocio
- **Calendar API**: Para agendar citas
- **Analytics**: Google Analytics o similares
- **CRM**: Integración con sistema de gestión de clientes

## Deployment y Hosting

### Opciones de Hosting
- **Netlify**: Recomendado (usado en demo original)
- **Vercel**: Alternativa excelente
- **GitHub Pages**: Opción gratuita
- **Servidor propio**: Para máximo control

### Proceso de Deployment
1. `npm run build` genera carpeta `dist/`
2. Subir contenido estático a hosting elegido
3. Configurar dominio personalizado si es necesario
4. Verificar SSL y redirecciones

## Mantenimiento y Updates

### Actualizaciones de Dependencias
- Revisar regularmente updates de seguridad
- Mantener Astro y TypeScript actualizados
- Testear después de cada actualización mayor

### Monitorización
- **Rendimiento**: Google PageSpeed Insights
- **SEO**: Google Search Console
- **Uptime**: Servicios de monitorización de uptime
- **Analytics**: Seguimiento de conversiones y tráfico
